<template>
  <section class="hero is-fullheight">

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure>
          <img src="../assets/logo.png" alt="">
        </figure>

        <template v-if="tariffs[0]">
          <table class="table is-striped">
            <thead>
              <tr>
                <th>DDD origem</th>
                <th>DDD destino</th>
                <th>Tarifa por minuto</th>
                <template v-if="user_name">
                  <th></th>
                </template>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tariff in tariffs" :key="tariff.id">
                <td>{{tariff.ddd_init}}</td>
                <td>{{tariff.ddd_end}}</td>
                <td>{{tariff.tariff.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td>
                <template v-if="user_name">
                  <td class="has-text-danger is-clickable" v-on:click="removeTariff(tariff.id)">
                    <span class="icon is-medium">
                      <i class="fas fa-trash-alt"></i>
                    </span>
                    remover
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </template>

        <template v-else>
          <p class="title mt-5 has-text-white">Não exitem tarifas cadastradas no momento</p>
        </template>

      </div>
    </div>
  </section>
</template>
<script>
import Cookies from 'js-cookie';
import Tariff from '../services/Tariff';
import alertBox from '../helpers/Sweet';

export default {
  data() {
    return {
      user_name: '',
      tariffs: []
    }
  },

  mounted() {

    if(Cookies.get('user_name')){
      this.user_name = Cookies.get('user_name');
    }
  
    Tariff.getTariffs()
    .then(response => {
      this.tariffs = response.data;
    });

  },

  methods: {
    removeTariff(id) {
      let data = {
        id: id
      }

      Tariff.removeTariff(data)
      .then(() => {
        alertBox('Tarifa removida com sucesso!', 'success');
        this.$router.go();
      })
      .catch(data => alertBox(data.response.data.error, 'error'));
    }
  }
}
</script>
<style lang="">
  
</style>
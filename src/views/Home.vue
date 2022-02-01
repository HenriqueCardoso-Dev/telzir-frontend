<template>
  
  <section class="hero is-fullheight">

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure>
          <img src="../assets/logo.png" alt="">
        </figure>

        <template v-if="!result.plane">
          <form @submit.prevent="calc">
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="number" placeholder="DDD de origem" v-model="ddd_init" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-map-marked-alt fa-xs"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
            
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="number" placeholder="DDD de destino" v-model="ddd_end" required>
                <span class="icon is-left">
                  <i class="fas fa-map-marked-alt fa-sm"></i>
                </span>
                <span class="icon is-right">
                  <i class="fas fa-check fa-sm"></i>
                </span>
              </div>
            </div>
            
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="number" placeholder="Tempo em minutos" v-model="time" required>
                <span class="icon is-medium is-left">
                  <i class="fas fa-clock"></i>
                </span>
                <span class="icon is-medium is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="select is-medium is-dark">
                <select v-model="plan">
                  <option value="0" disabled selected>selecione um plano</option>
                  <option value="30">FaleMais 30</option>
                  <option value="60">FaleMais 60</option>
                  <option value="120">FaleMais 120</option>
                </select>
              </div>
            </div>

            <button class="button is-warning mt-5">
              Consultar
            </button>
          </form>
        </template>
        <template v-else>
            <table class="table is-striped">
            <thead>
              <tr>
                <th>DDD origem</th>
                <th>DDD destino</th>
                <th>Tempo</th>
                <th>Plano selecionado</th>
                <th>Com o plano</th>
                <th>Sem o plano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0{{result.ddd_init}}</td>
                <td>0{{result.ddd_end}}</td>
                <td>{{result.time}} min.</td>
                <td>{{result.plane}}</td>
                <td>{{result.finalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td>
                <td>{{result.noPlane.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td>
              </tr>
            </tbody>
          </table>

          <button class="button is-warning" v-on:click="this.$router.go()">
            calcular novamente
          </button>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import alertBox from '@/helpers/Sweet';
import calculator from '../services/Calc';

export default {
  name: 'Home',

  data() {
    return {
      ddd_init: Number,
      ddd_end: Number,
      time: Number,
      plan: 0,

      result: {}

    }
  },

  methods: {
    calc() {
      calculator.calc({
        ddd_init: this.ddd_init,
        ddd_end: this.ddd_end,
        time: this.time,
        plan: this.plan
      })
      .then(response => {
        this.result.ddd_init = response.data.ddd_init;
        this.result.ddd_end = response.data.ddd_end;
        this.result.time = response.data.time;
        this.result.plane = response.data.plane;
        this.result.finalPrice = response.data.finalPrice;
        this.result.noPlane = response.data.noPlane;
      })
      .catch(res => alertBox(res.response.data.error, 'error'));
    }
  }
}
</script>
<style lang="scss">
  @import "../styles/global";
</style>
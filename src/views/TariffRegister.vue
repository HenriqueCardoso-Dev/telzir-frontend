<template lang="">
  <section class="hero is-fullheight">

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure>
          <img src="../assets/logo.png" alt="">
        </figure>

        <form action="" @submit.prevent="saveNewTariff">
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="number" placeholder="DDD de origem" min="0" v-model="ddd_init" required>
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
              <input class="input is-medium" type="number" placeholder="DDD de destino" min="0" v-model="ddd_end" required>
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
              <input class="input is-medium" type="number" placeholder="preço por minuto" min="0" v-model="tariff" step="0.01" required>
              <span class="icon is-medium is-left">
                <i class="fas fa-coins"></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

            <template v-if="!loading">
              <button class="button is-warning mt-5">
                Salvar
              </button>
            </template>

            <template v-else>
              <button class="button is-warning is-loading">Loading</button>
            </template>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Tariff from '../services/Tariff';
import alertBox from '../helpers/Sweet';

export default {
  data() {
    return {
      loading: false,
      ddd_init: Number,
      ddd_end: Number,
      tariff: Number
    }
  },

  methods: {
    saveNewTariff() {
      this.loading = true
      if (!this.ddd_init || !this.ddd_end || !this.tariff) {
        return alertBox('Verifique os campos e tente novamente!', 'warning');
      }

      let data = {
        ddd_init: this.ddd_init,
        ddd_end: this.ddd_end,
        tariff: this.tariff
      }

      Tariff.newTariff(data)
      .then(() => {
        alertBox('Taxa cadastrada com sucesso!', 'success');
        this.$router.go();
      })
      .catch(data => alertBox(data.response.data.error, 'error'))
      .finally(this.loading = false);
      
    }
  }
}
</script>
<style>
  
</style>
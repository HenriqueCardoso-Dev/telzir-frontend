<template>
  <section class="hero is-fullheight">

    <div class="hero-body">
      <div class="container has-text-centered">
        <figure>
          <img src="../assets/logo.png" alt="">
        </figure>

        <form @submit.stop.prevent="register">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Nome" v-model="name">
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" v-model="email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Cadastrar
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import alertBox from '../helpers/Sweet';
import User from '../services/User';

export default {
  name: 'Register',

  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    register() {
      if(this.name == '' || this.email == '' || this.password == '') {
        return alertBox('verifique os campos e tente novamente', 'warning')
      }

      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      User.newUser(data)
      .then(() => {
        alertBox('Usuário cadastrado com sucesso, faça o login!', 'success');
        this.$router.push({name: 'Login'});
      })
      .catch(data => alertBox(data.response.data.error, 'error'));

    }
  },
}
</script>
<style lang="">
  
</style>
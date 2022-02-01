<template lang="">
  <section class="hero is-fullheight">

    <div class="hero-body">
      <div class="container has-text-centered">
        <figure>
          <img src="../assets/logo.png" alt="">
        </figure>

        <form @submit.stop.prevent="login">
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
            <p class="control mt-5">
              <button class="button is-success">
                Login
              </button>
            </p>
            <p class="mt-3">
              <router-link to="/adm/register">
                <p class="has-text-white">cadastrar-se</p>
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>

import User from '../services/User';
import alertBox from '../helpers/Sweet';
import Cookies from 'js-cookie';

export default {
  name: "Login",

  mounted() {
    if (Cookies.get('_telzir_user_token_')) {
      this.$router.push({name: 'Home'});
    }
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      if(this.email != '' && this.password != '') {
        const payload = {
          email: this.email,
          password: this.password
        }
  
        User.login(payload)
        .then(res => {
          Cookies.set('_telzir_user_token_', res.data.access_token, { expires: 1 });
          Cookies.set('user_name', res.data.user_data.name, { expires: 1 })
          Cookies.set('user_email', res.data.user_data.email, { expires: 1 })
          Cookies.set('user_flag', res.data.user_data.user_flag, { expires: 1 })

          alertBox(`bem vindo ${Cookies.get('user_name')}`, 'success');
          this.user_name = Cookies.get('user_name');
          this.$router.go();
        })
        .catch(data => {
          alertBox(data.response.data.error, 'error');
        });
      }
      

    }
  },
  watch: {
    user_name() {
      this.$router.go();
    }
  }
}
</script>
<style lang="scss">
  @import "../styles/global";
</style>
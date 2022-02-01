<template>
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <p class="title has-text-white">
            TELZIR
          </p>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/">
              <a class="navbar-item">
                Home
              </a>
            </router-link>
            <router-link to="/tariffs">
              <a class="navbar-item">
                Consultar Tabela
              </a>
            </router-link>
            <template v-if="user_name">
              <router-link to='/adm/new-tariff'>
                <a class="navbar-item">
                  Registrar Tarifas
                </a>
              </router-link>
              <span class="navbar-item">
                <span class="icon is-medium is-left">
                  <i class="fas fa-user-circle"></i>
                </span>
                {{user_name}}
              </span>
              <span class="navbar-item is-clickable" v-on:click="logout()">
                Sair 
                <span class="icon is-medium is-left">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </span>
            </template>
            <template v-else>
              <span class="navbar-item is-clickable" v-on:click="login()">
                login 
                <span class="icon is-medium is-left">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
              </span>
            </template>
            
          </div>
        </div>
      </div>
    </header>
  </div>
  <router-view />
</template>

<script>
import Cookies from 'js-cookie';

export default {
  mounted () {
    if(Cookies.get('user_name')){
      this.user_name = Cookies.get('user_name');
    }
  },

  data() {

    return {
      user_name: ''
    }
  },

  methods: {
    logout() {
      Cookies.remove('user_name');
      Cookies.remove('user_email');
      Cookies.remove('user_flag');
      Cookies.remove('_telzir_user_token_');
      
      this.$router.go();
    },
    login() {
      this.$router.push({name: 'Login'});
    }
  }
}
</script>

<style lang="scss">
</style>

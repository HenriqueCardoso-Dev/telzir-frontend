import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import TariffRegister from "../views/TariffRegister.vue";
import TariffsTable from "../views/TariffsTable.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/adm/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/adm/new-tariff',
    name: 'TariffRegister',
    component: TariffRegister
  },
  {
    path: '/tariffs',
    name: 'TariffsTable',
    component: TariffsTable
  },
  {
    path: '/adm/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

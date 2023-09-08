import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "inicio",
    component: () =>
      import(
        /* webpackChunkName: "collection" */ "@/prueba/context/views/Prueba.vue"
      ),
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(
        /* webpackChunkName: "pokemonList" */ "@/prueba/context/views/PokemonList.vue"
      ),
  },
  {
    path: "/pagination",
    name: "pagination",
    component: () =>
      import(
        /* webpackChunkName: "pokemonList" */ "@/prueba/context/views/PokemonPagiation.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

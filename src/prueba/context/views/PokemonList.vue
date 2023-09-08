<template>
  <div class="BackgroundPokemonList">
    <p class="listTitle">Pokemon List</p>
    <getPokemonList />
  </div>
</template>
<script>
import getPokemonList from "../components/getPokemonList.vue";

export default {
  name: "PokemonList",
  components: {
    getPokemonList,
  },
};
</script>
<style scoped>
.BackgroundPokemonList {
  background-color: #d22e2e;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.BackgroundPokemonList .listTitle {
  font-size: 5vh;
  color: white;
}
</style>

<template>
  <div class="backgroundGetPokemonList"></div>
</template>
<script>
import axios from "axios";

export default {
  name: "getPokemonList",
  data() {
    return {
      pokemonList: null,
      pokemonName: null,
      id: "6",
    };
  },
  async mounted() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => (this.pokemonName = response));
    console.log(this.pokemonName);
  },
};
</script>
<style scoped>
.backgroundGetPokemonList {
  background-color: aqua;
  width: 100%;
  height: 90vh;
}
</style>

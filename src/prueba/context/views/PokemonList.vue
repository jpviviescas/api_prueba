<template>
  <div class="BackgroundPokemonList"><p class="listTitle">Pokemon List</p></div>
</template>
<script>
import axios from "axios";

export default {
  name: "PokemonList",
  data() {
    return {
      pokemons: null,
    };
  },
  beforeCreate() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/6")
      .then((response) => (this.pokemons = response))
      .catch(function (error) {
        console.log(error.toJSON());
      });
    console.log(this.pokemons);
  },
};
</script>
<style scoped>
.BackgroundPokemonList {
  background-color: #d22e2e;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.BackgroundPokemonList .listTitle {
  font-size: 5vh;
  color: white;
}
</style>

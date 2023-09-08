<template>
  <div class="backgroundGetPokemonList">
    <div class="pokemonList">
      <div v-for="(item, index) in pokemonList" :key="index" class="pokemon">
        <img :src="imgSrc(index + 1)" class="PokemonImage" />
        <p class="pokemonText">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "getPokemonList",
  data() {
    return {
      pokemonList: null,
    };
  },
  async mounted() {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => (this.pokemonList = response.data.results));
  },
  methods: {
    imgSrc(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    },
  },
};
</script>
<style scoped>
.backgroundGetPokemonList {
  width: 100%;
  height: 95vh;
}
.backgroundGetPokemonList .pokemonList {
  /* background-color: blue; */
  width: 100%;
  height: 95vh;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2vh;
}
.backgroundGetPokemonList .pokemonList .pokemon {
  /* background-color: cadetblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokemon .PokemonImage {
  width: 100px;
  height: 100px;
}
.pokemon .pokemonText {
  color: azure;
  font-size: 3vh;
}
</style>

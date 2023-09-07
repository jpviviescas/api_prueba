<template>
  <div class="prueba">
    <div class="backgoundPokemonInput">
      <input
        class="inputPokemon"
        v-model="textInput"
        placeholder="id de pokemon"
        type="text"
      />
      <div class="buttonInput" @click="getPokemon(textInput)">Enviar</div>
    </div>
    <img :src="imgSrc" alt="" />
    <h1>{{ pokemonName }}</h1>
  </div>
</template>
<script>
import axios from "axios";

// import pokemonApi from "@/prueba/api/pokemonApi";

export default {
  name: "pokemonInput",
  data() {
    return {
      textInput: "",
      pokemonName: null,
    };
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.textInput}.svg`;
    },
  },
  // mounted() {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/6")
  //     .then((response) => (this.pokemonName = response.data.name));
  // },
  methods: {
    getPokemon(id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => (this.pokemonName = response.data.name));
      this.textInput + "";
      // const pokemon = pokemonApi.get(`${id}`);
      // console.log(pokemon);
      // console.log(pokemon.Object);
      // this.pokemonName = pokemon.data;
    },
  },
};
</script>
<style scoped>
.backgoundPokemonInput {
  /* background-color: blue; */
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backgoundPokemonInput .inputPokemon {
  width: 70%;
  height: 2vh;
}
.backgoundPokemonInput .buttonInput {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: 2.5vh;
  margin-left: 1vw;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 5px;
}
.prueba {
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="backgroundPrueba">
    <img
      class="pokemonLogo"
      src="../../../assets/pruebas/pokemonLogo.png"
      alt="pokemonLogo"
    />
    <pokemonInput />
  </div>
</template>
<script>
import pokemonInput from "../components/pokemonInput.vue";

export default {
  name: "pruebaAPI",
  components: { pokemonInput },
  computed: {},
};
</script>
<style scoped>
.backgroundPrueba {
  background-color: #d22e2e;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokemonLogo {
  height: 20vh;
}
</style>

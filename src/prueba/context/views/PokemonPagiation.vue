<template>
  <div class="backgroundPokemonPagination"><p class="title">Pagination</p></div>
</template>
<script>
export default { name: "PokemonPagination" };
</script>
<style scoped>
.backgroundPokemonPagination {
  background-color: #d22e2e;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.backgroundPokemonPagination .title {
  font-size: 5vh;
  color: white;
}
</style>

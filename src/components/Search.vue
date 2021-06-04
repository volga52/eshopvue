<template>
  <form action="#" class="search">
    <input class="search-input" type="search" name="q" placeholder="Поиск" />
    <button class="search-button" type="button">Найти</button>
    <!-- <input class="search-button" type="submit" value="Найти"></p> -->
  </form>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
.search-button {
  font-size: 16px;
  margin: 5px;
}
</style>

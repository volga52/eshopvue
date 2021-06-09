<template>
  <form action="#" class="search">
    <input
      class="search-input"
      type="search"
      name="q"
      placeholder="Поиск"
      v-model="strSearch"
    />
    <button class="search-button" type="button" @click="sFilter">Найти</button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    strSearch: "",
    goodsList: [],
  }),
  props: {
    mainList: {
      typeof: Array,
      default: [],
    },
    setFilterGoods: {
      type: Function,
    },
  },
  methods: {
    sFilter() {
      this.goodsList = this.searchGoods(this.strSearch);
      this.setFilterGoods(this.goodsList);
    },

    searchGoods(value) {
      const regexp = new RegExp(value, "i");
      return this.mainList.filter((good) => regexp.test(good.product_name));
    },
  },
  watch: {
    strSearch() {
      this.sFilter();
    },
  },
};
</script>

<style>
.search-button {
  font-size: 16px;
  margin: 5px;
}
</style>

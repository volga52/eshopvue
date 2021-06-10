<template>
  <div class="inform">
    <form action="#" class="search">
      <input
        class="search-input"
        type="search"
        name="q"
        placeholder="Поиск"
        v-model="strSearch"
      />
      <button class="search-button" type="button" @click="sFilter">
        Найти
      </button>
    </form>
    <p v-show="countPozition">В корзине {{ countPozition }} позиций</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    strSearch: "",
    goodsList: [],
    countPozition: {
      // количество позиций в корзине
      typeof: Number,
      default: 0,
    },
  }),
  props: {
    mainList: {
      typeof: Array,
      default: [],
    },
    setFilterGoods: {
      type: Function,
    },
    cuontGoods: {
      typeof: Number,
      default: 0,
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
    cuontGoods() {
      this.countPozition = this.cuontGoods;
    },
  },
};
</script>

<style>
.search-button {
  font-size: 16px;
  margin: 5px;
}
.inform {
  display: flex;
  justify-content: space-between;
}
</style>

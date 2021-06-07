<template>
  <div class="content">
    <div class="container">
      <Search :mainList="catalog" :setFilterGoods="setFilter" />
      <Picklist :goodList="filterGoodList" @addToBasket="addToCart" />
      <!-- <Cart v-show="isVisibleCart" :sGood="goodSelect" /> -->
      <Cart v-show="isVisibleCart" :sGood="transferGood" />
    </div>
  </div>
</template>

<script>
import Cart from "./Cart";
import Picklist from "./Picklist";
import Search from "./Search";

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  name: "Content",
  components: {
    Cart,
    Picklist,
    Search,
  },

  data: () => ({
    catalog: [],
    filterGoodList: {
      typeof: Array,
      default: () => [],
    },
    transferGood: {
      type: Object,
      default: () => {},
    },
    // listGoodsCart: [],
    goodSelect: {
      type: Object,
      default: () => {},
    },
  }),

  props: {
    isVisibleCart: {
      typeof: Boolean,
      default: false,
    },
  },

  methods: {
    makeGETRequest(url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.catalog = data;
          this.filterGoodList = data;
        });
    },

    setFilter(value) {
      this.filterGoodList = value;
    },
    addToCart(good) {
      this.goodSelect = good;
      this.transferGood = this.goodSelect;
      this.goodSelect = {};
    },
  },

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`);
  },
};
</script>

<style>
.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 16px;
}

.good {
  border: 1px solid #000;
  margin-bottom: 5px;
  background: whitesmoke;
}
.item-pick-list {
  margin: 0 2px 5px;
  flex: auto;
  max-width: 200px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
}
</style>

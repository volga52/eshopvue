<template>
  <div class="content">
    <div class="container">
      <Search
        :mainList="catalog"
        :setFilterGoods="setFilter"
        :cuontGoods="indicatorGoods"
      />
      <Picklist :goodList="filterGoodList" @addToBasket="addToCart" />
      <Cart
        v-show="isVisibleCart"
        :cartList="cartGoods"
        @removeGood="removeFromCart"
        @clearCart="clearCart"
      />
    </div>
  </div>
</template>

<script>
import Cart from "./Cart";
import Picklist from "./Picklist";
import Search from "./Search";

const API_URL =
  // "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
  "http://localhost:3000";

export default {
  name: "Content",
  components: {
    Cart,
    Picklist,
    Search,
  },

  data: () => ({
    catalog: [],
    urlCart: API_URL,
    filterGoodList: {
      typeof: Array,
      default: () => [],
    },
    cartGoods: {
      type: Array,
      default: () => [],
    },
    indicatorGoods: {
      typeof: Number,
      default: 0,
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
      return fetch(url).then((data) => data.json());
    },

    makePOSTRequest(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },

    getGoods() {
      this.makeGETRequest(`${API_URL}/catalogData`).then((data) => {
        this.catalog = data;
        this.filterGoodList = data;
      });
    },

    getCart() {
      this.makeGETRequest(`${API_URL}/cartData`).then((data) => {
        this.cartGoods = data;
        this.indicatorGoods = this.cartGoods.length;
      });
    },

    setFilter(value) {
      this.filterGoodList = value;
    },

    addToCart(good) {
      this.makePOSTRequest(`${API_URL}/addToCart`, good).then(() =>
        this.getCart()
      );
    },
    removeFromCart(good) {
      this.makePOSTRequest(`${API_URL}/removeFromCart`, good).then(() =>
        this.getCart()
      );
    },
    clearCart() {
      const zero = { clear: "yes" };
      this.makePOSTRequest(`${API_URL}/removeFromCart`, zero).then(() =>
        this.getCart()
      );
    },
  },

  mounted() {
    this.getGoods();
    this.getCart();
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

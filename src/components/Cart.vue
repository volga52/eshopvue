<template>
  <div class="cart-block">
    <div class="cart-title">Корзина</div>
    <div class="cart-list di-flex">
      <p>{{ sGood }}</p>

      <div
        class="good"
        v-for="item in setGoodsList"
        :key="item.id_product"
        v-show="setLengthList"
      >
        <div><b>Наименование</b>: {{ item.product_name }}</div>
        <div><b>Цена за штуку</b>: {{ item.price }}</div>
        <div><b>Количество</b>: {{ item.quantity }}</div>
        <!-- <div><b>Стоимость</b>: ${good.price * good.quantity}</div> -->
        <button class="del-good-btn" data-id_product="${good.id_product}">
          Удалить
        </button>
      </div>
    </div>
    <button class="cart-btn">очистить корзину</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
    lengthList: {
      type: Number,
      // default: 0,
    },
    workList: {
      type: Array,
      default: () => [],
    },
    sGoodsList: [],
  }),

  props: {
    sGood: {
      typeof: Object,
      default: () => {},
    },
    API_URL: {
      typeof: String,
      default: "",
    },
  },

  computed: {
    setLengthList() {
      return this.sGoodsList.length;
    },
    setGoodsList() {
      if (this.sGood.id_product) {
        this.addToBasket_(this.sGood);
      }
      return this.sGoodsList;
    },
  },

  methods: {
    addToBasket_(good) {
      const indexProduct = this.sGoodsList.findIndex(
        (item) => item.product_name === good.product_name
      );

      if (indexProduct !== -1) {
        this.sGoodsList[indexProduct].quantity += 1;
      } else {
        good.quantity = 1;
        this.sGoodsList.push(good);
      }
    },

    // makeGETRequest(url) {
    //   return fetch(url).then((data) => data.json());
    // },

    // getCart() {
    //   this.makeGETRequest(`${this.API_URL}/cartData`).then((data) => {
    //     this.sGoodsList = data;
    //   });
    // },
  },
};
</script>

<style>
.cart-list {
  flex-direction: column;
}
</style>

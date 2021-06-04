<template>
  <div class="catalog-block">
    <div class="catalog-title">Каталог</div>
    <div class="catalog di-flex">
      <div
        class="good item-pick-list"
        v-for="item in goodList"
        :key="item.id_product"
      >
        <img src="#" alt="Photo" height="120" winght="120" class="image" />
        <div>
          <div><b>Наименование</b>: {{ item.product_name }}</div>
          <div><b>Цена за штуку</b>: {{ item.price }}</div>
          <button
            class="addToBasket-btn"
            data-id_product="${this.good.id_product}"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
export default {
  name: "Picklist",
  setup() {},
  data: () => ({
    good: [],
    goodList: [],
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`);
  },
  methods: {
    makeGETRequest(url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.good = data;
          this.goodList = data;
        });
    },
  },
};
</script>

<template>
  <div class="catalog-block">
    <div class="catalog-title">Каталог</div>
    <div class="catalog di-flex">
      <div
        class="good item-pick-list"
        v-for="item of goodList"
        :key="item.id_product"
      >
        <img src="#" alt="Photo" height="120" winght="120" class="image" />
        <div>
          <div><b>Наименование</b>: {{ item.product_name }}</div>
          <div><b>Цена за штуку</b>: {{ item.price }}</div>
          <button
            class="addToBasket-btn"
            data-id_product="${item.id_product}"
            @click="$emit('addToBasket', item)"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Picklist",
  props: {
    goodList: {
      typeof: Array,
      default: () => [],
    },
  },
  // data: () => ({
  //   cartList: {
  //     typeof: Array,
  //     default: () => [],
  //   },
  // }),
};
</script>

<style></style>

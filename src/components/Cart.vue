<template>
  <div class="cart-block">
    <div class="cart-title">Корзина</div>
    <div class="cart-list di-flex">
      <div
        class="good"
        v-for="item of cartList"
        :key="item.id_product"
        v-show="statusCartList"
      >
        <div><b>Наименование</b>: {{ item.product_name }}</div>
        <div><b>Цена за штуку</b>: {{ item.price }}</div>
        <div><b>Количество</b>: {{ item.quantity }}</div>
        <div><b>Стоимость</b>: {{ item.price * item.quantity }}</div>
        <button class="del-good-btn" @click="$emit('removeGood', item)">
          Удалить
        </button>
      </div>
    </div>
    <button
      class="cart-btn"
      @click="$emit('clearCart')"
      v-show="statusCartList"
    >
      очистить корзину
    </button>
    <h3 v-show="back_statusCartList">Корзина пуста</h3>
  </div>
</template>

<script>
export default {
  name: "Cart",

  props: {
    cartList: {
      typeof: Array,
      default: () => [],
    },
  },

  computed: {
    statusCartList() {
      return this.cartList.length;
      // return () => Object.keys(this.cartList).length === 0;
    },
    back_statusCartList() {
      return !this.cartList.length;
    },
  },
};
</script>

<style>
.cart-list {
  flex-direction: column;
}
</style>

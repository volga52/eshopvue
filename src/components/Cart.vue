<template>
  <div class="cart-block">
    <div class="cart-title">Корзина</div>
    <div class="cart-list di-flex"></div>
    <button class="cart-btn">очистить корзину</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  setup() {},
};
</script>

<style>
.cart-list {
  flex-direction: column;
}
</style>

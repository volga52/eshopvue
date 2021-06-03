<template>
  <div class="header-block">
    <div class="hearder-title">
      <h1>Internet Shop</h1>
    </div>
    <div class="menu-top">
      <form action="#" class="search">
        <input
          class="search-input"
          type="search"
          name="q"
          placeholder="Поиск"
        />
        <button class="search-button" type="button">Найти</button>
        <!-- <input class="search-button" type="submit" value="Найти"></p> -->
      </form>

      <button class="cart-button" type="button" @click="toggleCartStatus">
        Корзина {{ isVisibleCart }}
      </button>

      <!-- <a href="#"><img src="img/shopping-cart1.png" alt="contacts"></a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    isVisibleCart: false,
  }),

  methods: {
    toggleCartStatus() {
      this.isVisibleCart = !this.isVisibleCart;
      this.setToggelCart(this.isVisibleCart);
    },
  },

  props: {
    setToggelCart: {
      type: Function,
    },
  },
};
</script>

<style>
.header-block {
  background-color: beige;
  /* margin: 0 auto;
    width: 100vh; */
}

.hearder-title {
  margin: 0 16px;
}

.menu-top {
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
}

.search-button {
  font-size: 16px;
  margin: 5px;
}
</style>

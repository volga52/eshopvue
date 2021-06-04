<template>
  <div class="content">
    <div class="container">
      <Search />
      <Picklist />
      <Cart v-show="isVisibleCart" />
    </div>
  </div>
</template>

<script>
import Cart from "./Cart";
import Picklist from "./Picklist";
import Search from "./Search";

export default {
  name: "Content",
  components: {
    Cart,
    Picklist,
    Search,
  },
  props: {
    isVisibleCart: {
      typeof: Boolean,
      default: false,
    },
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

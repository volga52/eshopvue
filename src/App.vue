<template>
  <div id="app" class="wrapper">
    <Header :setToggelCart="setStatusCart" />
    <Content :isVisibleCart="toggelCart" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default {
  name: "App",
  data: () => ({
    toggelCart: false,
  }),

  components: {
    Header,
    Footer,
    Content,
  },

  methods: {
    setStatusCart(value) {
      this.toggelCart = value;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: serif;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
}

.container {
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.di-flex {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
</style>

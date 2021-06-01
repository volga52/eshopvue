<template>
  <div class="wrapper"></div>
</template>

<script>
const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
export default {
  name: "E-shop",
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

<style></style>

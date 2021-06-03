<template>
  <div class="footer">
    <hr />
    <div class="notice">
      <p>JavaScript Groop</p>
      <p>2021 All rights reserved &copy;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  /* color: black; */
  background-color: rgb(199, 170, 131);
  margin-top: 46px;
}

/* .footer {
    margin: 0 auto;
    align-self: center;
    width: 100vh;
} */

.notice {
  margin: 24px 24px 0 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
}
</style>

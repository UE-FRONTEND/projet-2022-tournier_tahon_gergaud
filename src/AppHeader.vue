<template>
  <div class="header-wrapper">
    <div></div>
    <img src="./img/tomus.png"/>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.header-wrapper {
  z-index: 3;
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top:0;
}
</style>
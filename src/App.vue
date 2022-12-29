<template>
  <div id="app" class="mainPage">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.mainPage {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #5377b5;
}
</style>

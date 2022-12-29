<template>
  <div class="header-wrapper">
    <button type="button" class="house-btn" @click="backToMainPage">
      <img src="./img/home.svg" alt="" class="house"/>
    </button>
    <img src="./img/tomus.png" alt="" class="logo"/>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    backToMainPage() {
      if(this.$route.name === "Tomus") {
        this.$store.commit('stopGame')
      } else {
        this.$router.push("/")
      }
    }
  }
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

.house-btn {
  margin-left: 10px;
  border: 0;
  border-radius: 0;
  background: none;
}

.house {
  width: 25px;
}

.logo {
  padding-right: 43px;
}
</style>
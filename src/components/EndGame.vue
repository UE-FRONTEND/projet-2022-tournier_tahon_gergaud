<template>
  <div class="leaving" :class="leaving ? 'back-home' : ''"></div>

  <div class="end-game" :class="isDone ? isWin ? 'game-ended-win' : 'game-ended-lose' : 'hidden'">
    <div v-show="isDone">
      <div v-if="isWin" class="column">
        <Letter :color="'green'" :value="'g'"></Letter>
        <Letter :color="'green'" :value="'g'"></Letter>
        <Letter :color="'green'" :value="'!'"></Letter>
      </div>
      <div v-else class="column">
        <Letter :color="'red'" :value="'p'"></Letter>
        <Letter :color="'red'" :value="'e'"></Letter>
        <Letter :color="'red'" :value="'r'"></Letter>
        <Letter :color="'red'" :value="'d'"></Letter>
        <Letter :color="'red'" :value="'u'"></Letter>
        <Letter :color="'red'" :value="'!'"></Letter>
      </div>
    </div>

    <input id="idButtonBack" v-show="isDone" type="button" value="Retour" class="back-btn" @click="goHome">
  </div>
</template>

<script>
import Letter from "./word/Letter";

export default {
  name: "EndGame",
  props: {
    isWin: Boolean,
    isDone: Boolean
  },
  components: {
    Letter
  },
  data: function() {
    return {
      leaving: false
    }
  },
  methods: {
    goHome() {
      this.leaving = true

      setTimeout(() => this.$router.push("/"), 3000)
    }
  }
}
</script>

<style scoped>
  .hidden {
    height: 0!important;
    width: 0!important;
  }

  .leaving {
    width: 0;
    height: 0;
    opacity: 0;
    position: fixed;
    z-index: 2;
    transition: height 3s ease-in-out, width 3s ease-in-out, opacity 2s ease-in-out;
    border-radius: 100%;
  }

  .back-home {
    opacity: 100%;
    height: 250vw;
    width: 250vw;
    background-color: #5377b5;
  }

  .back-btn {
    margin-top: 20px;
  }

  .end-game {
    position: fixed;
    z-index: 1;
    width: 100px;
    height: 100px;
    background-color: #5377b5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: height 3s ease-in-out, width 3s ease-in-out, opacity 2s ease-in-out;
    opacity: 0;
    border-radius: 100%;
    overflow: hidden;
  }

  .game-ended-win {
    opacity: 100%;
    height: 250vw;
    width: 250vw;
    background-color: #116212;
  }

  .game-ended-lose {
    opacity: 100%;
    height: 250vw;
    width: 250vw;
    background-color: darkred;
  }

  .column {
    display: flex;
  }
</style>
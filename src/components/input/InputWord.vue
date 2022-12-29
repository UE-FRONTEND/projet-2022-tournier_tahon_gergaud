<template>
  <input type="text" v-model="wordInput" maxlenght="sizeWord">
  <div>
    <div v-for="elem in this.updateWord" style="display: inline">
      {{ elem }}
    </div>
  </div>
</template>

<script>
import Letter from "../word/Letter.vue"

export default {
  name: "Input",
  components: {
    Letter,
  },
  data: function () {
    return {
      sizeWord: 5,
      goodLetters: ['a', '.', '.', 'b', 'd'],
      wordInput: ""
    }
  },
  computed: {
    updateWord: function() {
      let wordToDisplay = [];
      for (let i = 0; i < this.sizeWord; i++) {
        console.log("i = ", i, "word length = ", this.wordInput.length);
        wordToDisplay[i] = 'a';
        if (this.wordInput.length <= i) {
          wordToDisplay[i] = this.goodLetters[i];
        } else {
          wordToDisplay[i] = this.wordInput[i];
        }
      }
      return wordToDisplay;
    }
  }
}
</script>

<style scoped>

</style>
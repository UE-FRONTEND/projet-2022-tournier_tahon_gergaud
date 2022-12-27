<template>
  <div class="keyboard-wrapper">
    <Key v-for="key in keyboard" :value="key" @on-click="(v) => $emit('on-value', v)"/>
    <Key value="DEL" @on-click="$emit('on-delete')"/>
  </div>
</template>

<script>
import Key from "./Key";

export default {
  name: "Keyboard.vue",
  components: {Key},
  data: function() {
    return {
      keyboard: [
        'q', 'w', 'e', 'r', 't', 'y',
        'u', 'i', 'o', 'p', 'a', 's',
        'd', 'f', 'g', 'h', 'j', 'k',
        'l', 'z', 'x', 'c', 'v', 'b',
        'n', 'm'
      ]
    }
  }
}
</script>

<style scoped>
.keyboard-wrapper {
  margin-bottom: 15px;
  display: flex;
  width: 300px;
  height: 200px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
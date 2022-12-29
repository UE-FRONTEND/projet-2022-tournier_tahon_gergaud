<template>
  <input type="button" class="key-wrapper" @click="$emit('on-click', value)" :value="value.toUpperCase()"/>
</template>

<script>
export default {
  name: "Key.vue",
  props: {
    value: String
  }
}
</script>

<style scoped>
.key-wrapper {
  background-color: white;
  border-radius: 20px;
  margin-left: 10px;
  height: 30px;
  width: 40px;
  padding-top: 4px;
  font-weight: bold;
  border: 0;
  transition: all 0.2s ease-out;
}

.key-wrapper:hover {
  background-color: grey;
}
</style>
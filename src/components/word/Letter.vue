<template>
    <div :class="this.color" class="letter">
        {{ this.value.toUpperCase() }}
    </div>
</template>

<script>
export default{
    name: "Letter",
    props: {
        value: String,
        color: String
    }
}
</script>

<style scoped>
.green{
    background-color: green;
}

.yellow{
    background-color: #d2d201;
}

.red{
    background-color: red;
}

.gray {
    background-color: gray;
}

.letter {
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 30px;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  font-weight: bold;
  padding-top: 3px;
  min-height: 0;
}
</style>
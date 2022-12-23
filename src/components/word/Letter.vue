<template>
    <div :class="this.color">
        {{ this.value }}
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

<style>
.green{
    background-color: green;
}

.yellow{
    background-color: yellow;
}

.red{
    background-color: red;
}

</style>
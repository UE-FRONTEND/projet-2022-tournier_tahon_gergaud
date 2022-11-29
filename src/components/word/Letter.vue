<template>
    <div>
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
</style>
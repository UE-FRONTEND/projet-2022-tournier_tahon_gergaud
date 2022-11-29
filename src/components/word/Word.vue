<template>
    <div>

        <p v-for="letter in this.listLetterColor">
            <letter :value="letter.value" :color="letter.color"></letter>
        </p>
    </div>
</template>

<script>
import Letter from "./Letter.vue"

export default{
    name: "Word",
    components: {
        Letter
    },
    data: function(){
        return{
            listLetterColor: []
        }
    },
    props: {
        value: String,
        goal: String
    }
}
</script>

<style>
</style>
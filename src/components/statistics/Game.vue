<template>
    <div>
    </div>
</template>

<script>
export default{
    name: 'Game',
    data: function(){
        return{
        }
    },
    props: {
        date: Date,
        nbTry: Number,
        timeInGame: Number,
        win: Boolean,
        word: String
    }
}
</script>

<style>
</style>
<template>
    <div>
        {{ this.displayDate }}
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
        time: Number,
        win: Boolean,
        word: String
    },
    computed: {
        displayDate: function(){
            return this.date.toLocaleString();
        }
    }
}
</script>

<style>
.true{
    background-color: green;
}

.false{
    background-color: red;
}
</style>
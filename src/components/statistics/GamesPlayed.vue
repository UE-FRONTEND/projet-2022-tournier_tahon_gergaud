<template>
    <div>
        <ul v-for="partie in this.$store.getters.getPartiesJouees()">
            <partie></partie>
        </ul>
    </div>
</template>

<script>
import Game from './Game.vue'

export default{
    name: 'GamesPlayed',
    component: {
        Game
    },
    data: function(){
        return{

        }
    }
}
</script>

<style>
</style>
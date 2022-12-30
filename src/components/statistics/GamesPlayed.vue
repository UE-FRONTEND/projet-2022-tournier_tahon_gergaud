<template>
    <div>
        <ul id="idAllGames" class="gameList" v-for="oneGame in this.$store.getters.getGamesPlayed">
            <game :date="oneGame.date" :nbTry="oneGame.nbTry" :time="oneGame.time" :win="oneGame.win" :word="oneGame.word"></game>
        </ul>
    </div>
</template>

<script>
import Game from './Game.vue'

export default{
    name: 'GamesPlayed',
    components: {
        Game
    },
    data: function(){
        return{

        }
    },
}
</script>

<style>
.gameList{
    padding: 0;
}
</style>
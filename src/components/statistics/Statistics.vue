<template>
    <div>
        <p>
            Temps moyen de jeu : {{ this.averageTime }}
            <br>
            Nombre de tentatives : {{ this.nbTry }}
            <br>
            <span v-if="this.nbTry == 0">
                Pourcentage de victoire : -- %
            </span>
            <span v-else>
                Pourcentage de victoire : {{ this.percentageWin }} %
            </span>
            <br>
            <games-played></games-played>
        </p>

        <router-link to="/">
          <input type="button" value="Home">
        </router-link>

    </div>
</template>

<script>
import GamesPlayed from './GamesPlayed.vue'

export default{
    name: 'Statistics',
    components: {
        GamesPlayed
    },
    data: function(){
        return{
        }
    },
    computed: {
        percentageWin: function(){
            return this.$store.getters.getPercentage;
        },
        nbTry: function(){
            return this.$store.getters.getNbTry;
        },
        averageTime: function(){
            return this.$store.getters.getAverageTime.toFixed(1);
        }
    }
}
</script>

<style>
</style>
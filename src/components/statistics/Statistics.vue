<template>
    <div class="statistics">
        <p>
            Temps moyen de jeu : {{ this.averageTime }}
            <br>
            Nombre de tentatives moyennes: {{ this.nbTry }}
            <br>
            <span v-if="this.nbGames == 0">
                Pourcentage de victoire : -- %
            </span>
            <span v-else>
                Pourcentage de victoire : {{ this.percentageWin }} %
            </span>
            <br>
            Ensemble des parties jouées :
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
            return this.$store.getters.getNbTry.toFixed(2);
        },
        averageTime: function(){
            return this.$store.getters.getAverageTime.toFixed(1);
        },
        nbGames: function(){
            return (this.$store.getters.getGamesPlayed).length;
        },
    }
}
</script>

<style scoped>
.statistics {
  overflow: auto;
  height: calc(100vh - 75px);
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
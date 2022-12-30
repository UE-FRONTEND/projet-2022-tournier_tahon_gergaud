<template>
    <div class="statistics">
        <div class="stats-wrapper">
            <div class="row">
              <div class="bold">Temps moyen de jeu :</div>
              <div> {{ this.averageTime }}</div>
            </div>
            <div class="row">
              <div class="bold">Nombre de tentatives moyennes : </div>
              <div> {{ this.nbTry }}</div>
            </div>
            <div v-if="this.nbGames === 0" class="row">
              <div class="bold">Pourcentage de victoire : </div>
              <div> -- %</div>
            </div>
            <div v-else class="row">
              <div class="bold">Pourcentage de victoire : </div>
              <div> {{ this.percentageWin }} %</div>
            </div>
            <div class="row">
              <div class="bold">Ensemble des parties jouées : </div>
            </div>
            <games-played></games-played>
        </div>

        <router-link to="/">
          <input type="button" value="Home">
        </router-link>

    </div>
</template>

<script>
import GamesPlayed from './GamesPlayed.vue'
import {helperMethods} from '../../utils.js'

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
            return helperMethods.convertChrono(this.$store.getters.getAverageTime);
        },
        nbGames: function(){
          return (this.$store.getters.getGamesPlayed).length;
        }
    }
}
</script>

<style scoped>
.row {
  display: flex;
  margin-bottom: 5px;
  justify-content: center;
}

.bold {
  font-weight: bold;
  margin-right: 3px;
}

.stats-wrapper {
  display: flex;
  flex-direction: column;
  width: 350px;
}

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
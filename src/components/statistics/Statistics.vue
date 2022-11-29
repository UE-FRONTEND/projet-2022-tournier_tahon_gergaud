<template>
    <div>
        <p>
            Temps moyen de jeu : {{ this.$store.getters.getAverageTime }}
            <br>
            Nombre de tentatives : {{ this.$store.getters.getNbTry }}
            <br>
            <span v-if="this.$store.getters.getNbTry == 0">
                Pourcentage de victoire : -- %
            </span>
            <span v-else>
                Pourcentage de victoire : {{ this.$store.getters.getPercentage }} %
            </span>
            <br>
            <parties-jouees></parties-jouees>
        </p>

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
    }
}
</script>

<style>
</style>
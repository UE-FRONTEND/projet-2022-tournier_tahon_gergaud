<template>
    <div>
        <p>
            Temps moyen de jeu : {{ this.$store.getters.getTempsMoy }}
            <br>
            Nombre de tentatives : {{ this.$store.getters.getNbTentatives }}
            <br>
            <span v-if="this.$store.getters.getNbTentatives == 0">
                Pourcentage de victoire : -- %
            </span>
            <span v-else>
                Pourcentage de victoire : {{ this.$store.getters.getPourcentage }} %
            </span>
            <br>
            <parties-jouees></parties-jouees>
        </p>

    </div>
</template>

<script>
import PartiesJouees from './PartiesJouees.vue'

export default{
    name: 'Statistiques',
    components: {
        PartiesJouees
    },
    data: function(){
        return{

        }
    }
}
</script>

<style>
</style>
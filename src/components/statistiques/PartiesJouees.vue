<template>
    <div>
        <ul v-for="partie in this.$store.getters.getPartiesJouees()">
            <partie></partie>
        </ul>
    </div>
</template>

<script>
import Partie from './Partie.vue'

export default{
    name: 'PartiesJouees',
    component: {
        Partie
    },
    data: function(){
        return{

        }
    }
}
</script>

<style>
</style>
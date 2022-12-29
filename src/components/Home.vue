<template>
    <div>
        <p v-for="personne in this.groupe">
        {{ personne }}
        </p>

        <router-link to="/tomus">
            <input id="idButtonStart" type="button" value="Start" v-on:click="startGame">
        </router-link>

        <router-link to="/statistics">
            <input type="button" value="Statistiques">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Home", 
    data: function(){
        return{
            groupe: ['TOURNIER Constant', 'TAHON Valentin', 'GERGAUD Roxanne']
        }
    },
    methods: {
        startGame: function () {
          this.$store.commit('newGame', {});
        }
    }
}
</script>

<style>
</style>
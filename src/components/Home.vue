<template>
    <div>
        <p style="font-weight: bold">TPA51</p>
        <p v-for="personne in this.groupe">
        {{ personne }}
        </p>

        <router-link to="/tomus">
            <input id="idButtonStart" type="button" value="Start">
        </router-link>

        <router-link to="/statistics">
            <input id="idButtonStatistics" type="button" value="Statistiques">
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
    }
}
</script>

<style>
</style>
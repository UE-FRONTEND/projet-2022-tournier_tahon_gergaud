<template>
    <div>
        <p v-for="personne in this.groupe">
        {{ personne }}
        </p>

        <router-link to="/game">
            <input type="button" value="Start">
        </router-link>

        <router-link to="/statistiques">
            <input id="idButtonStart" type="button" value="Statistiques">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Home", 
    data: function(){
        return{
            groupe: ['TOURNIR Constant', 'TAHON Valentin', 'GERGAUD Roxanne']
        }
    }
}
</script>

<style>
</style>
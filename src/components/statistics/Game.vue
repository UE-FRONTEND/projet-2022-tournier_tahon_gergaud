<template>
    <div class="gameDetails">
        <p>___________</p>
        <p>Partie jouée le {{ this.displayDate }}</p>
        <div class="game gameWin" v-if="win && nbTry === 1">
            <p>Vous avez trouvé le mot "{{ word }}" en {{ this.displayTime }} secondes</p>
            <p>avec {{ nbTry }} essai.</p>
        </div>
        <div class="game gameWin" v-else-if="win && nbTry > 1">
            <p>Vous avez trouvé le mot "{{ word }}" en {{ this.displayTime }} secondes</p>
            <p>avec {{ nbTry }} essais.</p>
        </div>
        <div class="game gameLose" v-else-if="!win && nbTry === 1">
            <p>Rip t'es trop nul, t'as pas trouvé le mot "{{ word }}"</p>
            <p>pourtant t'y as passé {{ this.displayTime}} et fait {{ nbTry }} essai.</p>
        </div>
        <div class="game gameLose" v-else>
            <p>Rip t'es trop nul, t'as pas trouvé le mot "{{ word }}"</p>
            <p>pourtant tu y as passé {{ this.displayTime}} et fait {{ nbTry }} essais.</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Game',
    data: function(){
        return{
        }
    },
    props: {
        date: Date,
        nbTry: Number,
        time: Number,
        win: Boolean,
        word: String
    },
    computed: {
        displayDate: function(){
            return this.date.toLocaleString();
        },

        displayTime: function(){
            return this.time.toFixed(1)
        }
    }
}
</script>

<style>
.game {
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-around;
}

.game > p {
  margin-bottom: 0;
}

.gameWin {
  border-left: 2px solid green;
}

.gameLose {
  border-left: 2px solid red;
}
</style>

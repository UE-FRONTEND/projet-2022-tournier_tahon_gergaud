<template>
    <div>
        <p>___________</p>
        <p>Partie jouée le {{ this.displayDate }}</p>
        <div v-if="win">
            <p>Vous avez trouvé le mot "{{ word }}" en {{ this.displayTime }} secondes</p>
            <div v-if="nbTry = 1">
                <p>avec {{ nbTry }} essai.</p>
            </div>
            <div v-else>
                <p>avec {{ nbTry }} essais.</p>
            </div>
        </div>
        <div v-else>
          <p>Rip t'es trop nul, t'as pas trouvé le mot "{{ word }} .</p>
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
.true{
    background-color: green;
}

.false{
    background-color: red;
}
</style>
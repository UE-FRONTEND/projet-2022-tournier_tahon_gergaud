<template>
    <div>
        <p v-for="word in this.listWords">
            <word :value="word" :goal=this.goal></word>
        </p>
    </div>
    <div>
        <!-- TODO Chronometre -->
        <input type="text" v-model="this.word">
        <input type="button" value="Valider" @click="addWord">
        <!-- TODO Verifier reponse -->
    </div>
</template>

<script>
import axios from "axios";
import Word from "./word/Word.vue"

export default{
    name: 'Tomus',
    components: {
        Word
    },
    data: function(){
        return{
            word: "",
            listWords: [],
            goal: "",
            nbTryMax: 6
        }
    },
    mounted(){
        axios.get("https://vue-project-backend-eta.vercel.app/api/new-game").then(response => this.goal = response.data.word)
    },
    methods: {
        addWord: async function(){
            let correct = (await axios.post("https://vue-project-backend-eta.vercel.app/api/check-word",
                {
                    word: this.word
                }
            )).data.isWord;

            if (correct && this.word.length == 5){
                this.listWords.push(this.word);
            }
            else{
                // TODO message error
            }
                
            this.word = "";
        }
    }
}
</script>

<style>
</style>
<template>
    <div class="tomus-wrapper">
      <!-- All word try -->
      <div id="idAllWords" class="game">
          <div v-for="word in this.listWords" class="row">
              <word :value="word" :goal="this.goal"></word>
          </div>
      </div>
      <!---->

      <div>
          {{ this.goal }} <!-- delete after -->
          <br>

          <!-- Chrono -->
          {{ this.displayChrono }}
          <!---->

          <input id="idTextWord" type="text" v-on:keyup.enter="addWord" v-model="this.word">
          <input id="idButtonValidate" type="button" value="Valider" @click="addWord">
          <div class="incorrect-word">
            <p v-if="incorrectWord">Ce mot n'existe pas !</p>
            <p v-else-if="alreadyTyped">Vous avez deja ecrit ce mot !</p>
          </div>

      </div>

      <div>
        <router-link to="/">
          <input type="button" value="Abandonner" @click="endGame">
        </router-link>
      </div>
    </div>

    <EndGame :isWin="win" :isDone="gameIsDone"></EndGame>
</template>

<script>
import axios from "axios";
import Word from "./word/Word.vue"
import EndGame from "./EndGame.vue"

export default{
    name: 'Tomus',
    components: {
        Word,
        EndGame
    },
    data: function(){
        return{
            word: "",
            listWords: [],
            goal: "",
            win: false,
            chrono: 0.0,
            intervalID: null,
            nbTryMax: 6,
            incorrectWord: false,
            alreadyTyped: false,
            gameIsDone: false
        }
    },
    mounted(){
        axios.get("https://vue-project-backend-eta.vercel.app/api/new-game").then(response => this.goal = response.data.word); // get word to guess
        this.intervalID = setInterval(this.updateChrono, 100); // init chrono
    },
    computed: {
        displayChrono: function(){
            return this.chrono.toFixed(1); // display chrono with 1 number after comma
        }
    },
    methods: {
        addWord: async function(){
            if(this.word.length !== 5) {
              return
            }

            let correct = (await axios.post("https://vue-project-backend-eta.vercel.app/api/check-word",
                {
                    word: this.word
                }
            )).data.isWord; // check if the word exist

            if (correct) { // if the word exist and his length == 5
                if(this.listWords.indexOf(this.word) !== -1){
                    this.alreadyTyped = true
                    setTimeout(() => this.alreadyTyped = false, 2000)
                }
                else{
                    this.listWords.push(this.word);
                    this.word = "";
                    this.nbTryMax--;

                    if(this.listWords[this.listWords.length-1] === this.goal){
                        this.win = true;
                    }

                    if(this.win || this.nbTryMax === 0){
                        this.endGame();
                    }
                }
            }
            else{
                this.incorrectWord = true
                setTimeout(() => this.incorrectWord = false, 2000)
            }
                
        },
        updateChrono: function(){
            this.chrono += 0.1; // add 1 second in chrono
        },
        stopChrono: function(){
            clearInterval(this.intervalID);
        },
        endGame: function(){
            this.stopChrono();
            this.gameIsDone = true

            this.$store.commit('addGame', {
                "date": new Date(), "nbTry": this.listWords.length, "time": this.chrono, "win": this.win, "word": this.goal
            });
        },
    }
}
</script>

<style scoped>
  .incorrect-word {
    color: red;
    height: 30px;
    padding-top: 5px;
    font-weight: bold;
  }

  .row {
    display: flex;
    flex-direction: row;
    height: 45px;
    justify-content: center;
    min-height: 0;
  }

  .game {
    height: 350px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    min-height: 0;
  }
</style>
<template>
    <div class="tomus-wrapper">
      <!-- All word try -->
      <div id="idAllWords" class="game">
        <div v-for="word in this.listWords" class="row">
            <word :value="word" :goal="this.goal"></word>
        </div>
        <div id="idDivWord" v-show="!gameIsDone" class="row m-top">
          <div v-for="letter in updateWord" >
              <letter :value="letter[0]" :color="letter[1]"></letter>
          </div>
        </div>
      </div>
      <!---->

      <div>
          Il reste {{ this.nbTryLeft }} essais
          <br>

          <!-- Chrono -->
          {{ this.displayChrono }}
          <!---->

          <div class="incorrect-word">
            <p v-if="incorrectWord">Mot invalide !</p>
            <p v-else-if="alreadyTyped">Vous avez deja ecrit ce mot !</p>
          </div>

      </div>

      <Keyboard id="idKeyboard" @on-value="addInput" @on-delete="deleteInput" @on-enter="addWord"/>

      <div>
          <input id="idButtonGiveUp" type="button" value="Abandonner" @click="endGame" :disabled="gameIsDone">
      </div>
    </div>

    <EndGame :isWin="win" :isDone="gameIsDone"></EndGame>
</template>

<script>
import axios from "axios";
import Word from "./word/Word.vue"
import EndGame from "./EndGame.vue"
import Keyboard from "./keyboard/Keyboard";
import Letter from "./word/Letter.vue";
import {helperMethods} from "../utils";

export default{
    name: 'Tomus',
    components: {
        Word,
        EndGame,
        Keyboard,
        Letter,
    },
    data: function(){
        return{
          acceptedKeys: [
            'q', 'w', 'e', 'r', 't', 'y',
            'u', 'i', 'o', 'p', 'a', 's',
            'd', 'f', 'g', 'h', 'j', 'k',
            'l', 'z', 'x', 'c', 'v', 'b',
            'n', 'm'
          ],
            word: "",
            listWords: [],
            goal: "",
            win: false,
            chrono: 600,
            intervalID: null,
            nbTryLeft: 6,
            incorrectWord: false,
            alreadyTyped: false,
            gameIsDone: false,
        }
    },
    watch: {
        stopGame() {
          this.endGame()
        },
        chrono() {
          if(this.chrono === 0) {
            this.endGame()
          }
        }
    },
    unmounted() {
      this.stopChrono()
    },
  beforeCreate() {
    this.$store.commit('setGameState')
  },

  created() {
    this.$store.commit('newGame', {});

    document.addEventListener('keydown', this.getKeyPressed);
  },
  mounted(){
        axios.get("https://vue-project-backend-eta.vercel.app/api/new-game").then(response => this.goal = response.data.word); // get word to guess
        this.intervalID = setInterval(this.updateChrono, 1000); // init chrono
    },
    computed: {
        stopGame() {
          return this.$store.getters.getStopGame
        },

        displayChrono: function(){
            return helperMethods.convertChrono(this.chrono)
        },

        updateWord: function () {
          let wordToDisplay = [];
          let goodLetters = this.$store.getters.getGoodLetters;
          for (let i = 0; i < 5; i++) {
            if (this.word.length <= i) {
              if (goodLetters[i] === ' ') {
                wordToDisplay[i] = ['.', "gray"];
              } else {
                wordToDisplay[i] = [goodLetters[i], "green"];
              }
            } else {
              wordToDisplay[i] = [this.word[i], "gray"];
            }
          }
          return wordToDisplay
        }
    },
  beforeUnmount() {
    document.removeEventListener('keydown', this.getKeyPressed);
  },
  methods: {
    getKeyPressed: function(event) {
      if(event.key === "Backspace") {
        this.deleteInput()
      } else if(event.key === "Enter") {
        this.addWord()
      } else if(this.acceptedKeys.includes(event.key)) {
        this.addInput(event.key);
      }
    },
    addInput: function(v) {
      if(this.word.length < 5) {
        this.word += v
      }
    },
    deleteInput: function() {
      this.word = this.word.slice(0, this.word.length-1)
    },
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
                this.nbTryLeft--;

                if(this.listWords[this.listWords.length-1] === this.goal){
                    this.win = true;
                }

                if(this.win || this.nbTryLeft === 0){
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
        this.chrono -= 1; // add 1 second in chrono
    },
    stopChrono: function(){
        clearInterval(this.intervalID);
    },
    endGame: function(){
        this.stopChrono();
        this.gameIsDone = true

        this.$store.commit('addGame', {
            "date": new Date(), "nbTry": this.listWords.length, "time": 600-this.chrono, "win": this.win, "word": this.goal
        });
    },
  }
}
</script>

<style scoped>
  .m-top {
    margin-top: 45px;
  }

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
    justify-content: flex-start;
    height: 350px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    min-height: 0;
  }
</style>
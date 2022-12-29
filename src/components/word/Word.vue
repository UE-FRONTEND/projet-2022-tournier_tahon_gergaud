<template>
    <!-- All letters in the word -->
    <div v-for="letter in this.letters" class="letter">
        <letter :value="letter.letter" :color="letter.color"></letter>
    </div>
    <!---->
</template>

<script>
import Letter from "./Letter.vue"

export default{
    name: "Word",
    components: {
        Letter
    },
    data: function(){
        return{
            letters: []
        }
    },
    props: {
        value: String,
        goal: String
    },
    mounted(){
        this.letters = this.verifWord(this.value, this.goal);
    },
    methods: {
        verifWord: function(value, goal){
            const wordList = value.split('');
            let goalList = goal.split('');
            let letterList = [];

            wordList.forEach((letter, idx) => {
                let idxToPush = goalList.indexOf(letter);
                if(idx === idxToPush){ 
                    goalList[idxToPush] = ' ';
                    letterList[idx] = {"letter": letter, "color": "green"};
                }
                else if(idxToPush !== -1){
                    goalList[idxToPush] = ' ';
                    letterList[idx] = {"letter": letter, "color": "yellow"};
                }
                else{
                    letterList[idx] = {"letter": letter, "color": "red"};
                }
            });

            return letterList;
        }
    }
}
</script>
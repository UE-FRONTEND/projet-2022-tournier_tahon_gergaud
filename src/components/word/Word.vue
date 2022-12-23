<template>
    <!-- All letters in the word -->
    <div v-for="letter in this.letters">
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
        this.verifWord();
    },
    methods: {
        verifWord: function(){
            let occWord = this.countOcc(this.value);
            let occGoal = this.countOcc(this.goal);

            for(let i = 0; i < this.goal.length; i++){ // for all letters in goal
                let color;
                if(this.value[i] == this.goal[i]){ // if the letter is in the same place than goal
                    color = "green"; 
                }
                else{
                    if(!(this.value[i] in occGoal)){ // if the letter doesn't exist in goal
                        color = "red";
                    }
                    else{
                        if(occWord[this.value[i]] > occGoal[this.value[i]]){ // if the letter exist but not in a good place and more than in goal
                            occWord[this.value[i]] -= 1;
                            color = "red";
                        }
                        else{ // if the letter exist but not in a good place
                            color = "yellow";
                        }
                    }
                }
                this.letters.push({letter: this.value[i], color: color}); // add the letter and his color
            }
        },
        countOcc: function(word){
            let occWord = {}
            for(const element of word){
                if(element in occWord){
                    occWord[element] += 1;
                }
                else{
                    occWord[element] = 1
                }
            }
            return occWord;
        }
    }
}
</script>

<style>

</style>
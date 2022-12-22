<template>
    <div>

        <p v-for="letter in this.listLetterColor">
            <letter :value="letter.value" :color="letter.color"></letter>
        </p>
    </div>
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
            listLetterColor: []
        }
    },
    props: {
        value: String,
        goal: String
    },
    mounted() {
        let goal_copy = this.goal.split('');

        
        for(let i=0; i<goal.length(); i++){
            let color;
            if(goal_copy[i] == this.value[i]){
                color = "green"
            }
            else{
                if(this.value[i] in goal_copy){
                    color = "yellow"
                }
                else{
                    color = "red"
                }
            }
            this.listLetterColor.push({letter: this.value[i], color: color})

            goal_copy.splice(0);
        }
    }
}
</script>

<style>
</style>
import {createStore} from 'vuex';

export const store = createStore({
    state() {
        return {
            tempsMoy: 0,
            nbTentatives: 0,
            pourcentage: 0,
            partiesJouees: []
        };
    },
    getters: {
        getTempsMoy(state){
            return state.tempsMoy;
        },
        getNbTentatives(state){
            return state.nbTentatives;
        },
        getPourcentage(state){
            return state.pourcentage;
        },
        getPartiesJouees(state){
            return state.partiesJouees;
        }
    },
    mutations: {}
});

import {createStore} from 'vuex';

export const store = createStore({
    state() {
        return {
            averageTime: 0,
            nbTry: 0,
            percentage: 0,
            gamesPlayed: []
        };
    },
    getters: {
        getAverageTime(state){
            return state.averageTime;
        },
        getNbTry(state){
            return state.nbTry;
        },
        getPercentage(state){
            return state.percentage;
        },
        getGamesPlayed(state){
            return state.gamesPlayed;
        }
    },
    mutations: {}
});

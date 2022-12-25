import {createStore} from 'vuex';

export const store = createStore({
    state() {
        return {
            averageTime: 0,
            allTime: 0,
            nbTry: 0,
            allWin: 0,
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
    mutations: {
        addGame(state, game){
            state.gamesPlayed.push(game);
            state.nbTry++;
            state.allTime += game.time;
            if(game.win){
                state.allWin++;
            }
            if(state.allWin > 0){
                state.percentage = state.allWin/state.nbTry*100;
            }
            state.averageTime = state.allTime/state.nbTry;
        }
    }
});

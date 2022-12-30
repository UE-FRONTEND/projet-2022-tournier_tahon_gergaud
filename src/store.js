import {createStore} from 'vuex';

export const store = createStore({
    state() {
        return {
            goodLetters: [],
            averageTime: 0,
            allTime: 0,
            nbTry: 0,
            allTry: 0,
            allWin: 0,
            percentage: 0,
            gamesPlayed: [],
            stopGame: false
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
        },
        getGoodLetters(state){
            return state.goodLetters;
        },
        getStopGame(state) {
            return state.stopGame
        }
    },
    mutations: {
        addGame(state, game){
            state.gamesPlayed.push(game);
            state.allTry += game.nbTry;
            state.nbTry = state.allTry/state.gamesPlayed.length;
            state.allTime += game.time;
            if(game.win){
                state.allWin++;
            }
            if(state.allWin > 0){
                state.percentage = state.allWin/state.gamesPlayed.length*100;
            }
            state.averageTime = state.allTime/state.gamesPlayed.length;
        },

        stopGame(state) {
            if(!state.stopGame) {
                state.stopGame = true
            }
        },

        newGame(state) {
            for (let i = 0; i < 5; i++) {
                state.goodLetters[i] = ' ';
            }
        },

        setGameState(state) {
            state.stopGame = false
        },

        updateGoodLetter(state, word) {
            for (let i = 0; i < 5; i++) {
                if (word[i] !== ' ') {
                    state.goodLetters[i] = word[i];
                }
            }
        }
    }

});

import reducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('restartGame', () => {
    it('Should start a new game', () => {
    let state= {
        guesses: [1, 2, 3],
        feedback: 'Awesome!',
        correctAnswer: 1
    };
    const correctAnswer = 4
    state = reducer(state, restartGame(correctAnswer));
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toEqual(correctAnswer);
    expect(state.auralStatus).toEqual('');
    });
});

describe('makeGuess', () => {
    it('should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 5
        };
        state = reducer(state,makeGuess(6));
        expect(state.guesses).toEqual([6]);
        expect(state.feedback).toEqual("You're Hot!");
        state = reducer(state, makeGuess(99));
        expect(state.guesses).toEqual([6, 99]);
        expect(state.feedback).toEqual("You're Ice Cold...");
        state = reducer(state, makeGuess(30));
        expect(state.guesses).toEqual([6, 99, 30]);
        expect(state.feedback).toEqual("You're Warm.");
        state = reducer(state, makeGuess(40));
        expect(state.guesses).toEqual([6, 99, 30, 40]);
        expect(state.feedback).toEqual("You're Cold...");
    });
});
describe('genrateAuralUpdate', () =>{
    it('can generate aural updates', () =>{
        let state= {
            guesses: [99, 98, 97],
            feedback: "You're Ice Cold...",
            auralStatus: ''
        };
        state=reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(`Here's the status of the game right now: You're Ice Cold... You've made 3 guesses. In order of most- to least-recent, they are: 97, 98, 99`);
    });
});



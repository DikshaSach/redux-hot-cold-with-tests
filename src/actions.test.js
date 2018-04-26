import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';
describe ('generateAuralUpdate', () => {
    it('Should return generateAuralUpdate', () => {
       const action = generateAuralUpdate();
       expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});
describe ('restartGame', () => {
    it('Shoudl return restart game', () => {
        const correctAnswer = 1;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});
describe('makeguess', () => {
    it('should return make guess action', () => {
        const guess = 1;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});
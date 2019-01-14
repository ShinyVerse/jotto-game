export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};
/**
 * Returns Redux Think function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @param  {string} guessedWord
 * @return {function} redux thunk function
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {

  };
};

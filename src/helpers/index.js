/**
 * @method getLetterMatchCount
 * @param  {string} guessedWord
 * @param  {string} secretWord
 * @return {number} - number of how many letters match between guessed and secret word
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  const secretWordSet = new Set(secretWord.split(''));
  const guessedWordSet = new Set(guessedWord.split(''));
  return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
};

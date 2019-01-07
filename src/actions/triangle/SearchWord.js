import { RIGHT_WORD, WORD_FOUND, WORD_NOT_FOUND } from '../../types';

const compareWords = (typedWords, symmetricWord) => {
  const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return w1.localeCompare(w2);
};

export const searchWord = ({ typedWords, kind }) => (dispatch) => {
  let wordFound = false;
  if (typedWords.length === RIGHT_WORD.length) {
    const convertedWords = compareWords(typedWords, RIGHT_WORD);
    if (convertedWords === 0 && kind === 'triangle') {
      wordFound = true;
    } else if (convertedWords === 1 || convertedWords === -1) {
      wordFound = false;
    }
  }
  if (!wordFound) {
    dispatch({
      type: WORD_NOT_FOUND,
    });
  } else {
    dispatch({
      type: WORD_FOUND,
    });
  }
};

export default searchWord;

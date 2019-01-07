import {
  POLY_SYM_OF_D,
  POLY_WORD_FOUND,
  POLY_WORD_NOT_FOUND,
} from '../../types';

const compareWords = (typedWords, symmetricWord) => {
  const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return w1.localeCompare(w2);
};

export const polySymetricOfd = ({ typedWords, kind }) => (dispatch) => {
  let wordFound = false;
  if (typedWords.length === POLY_SYM_OF_D.length) {
    const convertedWords = compareWords(typedWords, POLY_SYM_OF_D);
    if (convertedWords === 0 && kind === 'square') {
      wordFound = true;
    } else if (convertedWords === 1 || convertedWords === -1) {
      wordFound = false;
    }
  }
  if (!wordFound) {
    dispatch({
      type: POLY_WORD_NOT_FOUND,
    });
  } else {
    dispatch({
      type: POLY_WORD_FOUND,
    });
  }
};

export default polySymetricOfd;

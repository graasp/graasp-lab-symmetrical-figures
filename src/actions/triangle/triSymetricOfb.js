import {
  TRI_SYM_OF_B,
  TRI_WORD_FOUND,
  TRI_WORD_NOT_FOUND,
} from '../../types';

const compareWords = (typedWords, symmetricWord) => {
  const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return w1.localeCompare(w2);
};

export const triSymetricOfb = ({ typedWords, kind }) => (dispatch) => {
  let wordFound = false;
  if (typedWords.length === TRI_SYM_OF_B.length) {
    const convertedWords = compareWords(typedWords, TRI_SYM_OF_B);
    if (convertedWords === 0 && kind === 'triangle') {
      wordFound = true;
    } else if (convertedWords === 1 || convertedWords === -1) {
      wordFound = false;
    }
  }
  if (!wordFound) {
    dispatch({
      type: TRI_WORD_NOT_FOUND,
    });
  } else {
    dispatch({
      type: TRI_WORD_FOUND,
    });
  }
};

export default triSymetricOfb;

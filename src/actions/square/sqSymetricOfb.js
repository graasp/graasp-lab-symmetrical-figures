import {
  SQ_SYM_OF_B,
  SQ_WORD_FOUND,
  SQ_WORD_NOT_FOUND,
} from '../../types';

const compareWords = (typedWords, symmetricWord) => {
  const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return w1.localeCompare(w2);
};

export const sqSymetricOfb = ({ typedWords, kind }) => (dispatch) => {
  let wordFound = false;
  if (typedWords.length === SQ_SYM_OF_B.length) {
    const convertedWords = compareWords(typedWords, SQ_SYM_OF_B);
    if (convertedWords === 0 && kind === 'square') {
      wordFound = true;
    } else if (convertedWords === 1 || convertedWords === -1) {
      wordFound = false;
    }
  }
  if (!wordFound) {
    dispatch({
      type: SQ_WORD_NOT_FOUND,
    });
  } else {
    dispatch({
      type: SQ_WORD_FOUND,
    });
  }
};

export default sqSymetricOfb;

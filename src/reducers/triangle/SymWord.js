import {
  SYMMETRIC_WORD,
  WORD_FOUND,
  WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  wordFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case WORD_NOT_FOUND:
      return {
        ...state,
        wordFound: false,
      };

    case WORD_FOUND:
      return {
        ...state,
        wordFound: true,
      };
    case SYMMETRIC_WORD:
      return {
        ...state,
        isWordFound: true,
      };
    default:
      return state;
  }
};

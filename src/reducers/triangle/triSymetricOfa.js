import {
  TRI_SYM_OF_A,
  TRI_WORD_FOUND,
  TRI_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  isTriSymOfAFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TRI_WORD_NOT_FOUND:
      return {
        ...state,
        isTriSymOfAFound: false,
      };

    case TRI_WORD_FOUND:
      return {
        ...state,
        isTriSymOfAFound: true,
      };
    case TRI_SYM_OF_A:
      return {
        ...state,
        isTriSymOfAFound: true,
      };
    default:
      return state;
  }
};

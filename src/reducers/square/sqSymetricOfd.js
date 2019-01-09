import {
  SQ_SYM_OF_D,
  SQ_WORD_FOUND,
  SQ_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  isSqSymOfBFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case SQ_WORD_NOT_FOUND:
      return {
        ...state,
        isSqSymOfBFound: false,
      };

    case SQ_WORD_FOUND:
      return {
        ...state,
        isSqSymOfBFound: true,
      };
    case SQ_SYM_OF_D:
      return {
        ...state,
        isSqSymOfBFound: true,
      };
    default:
      return state;
  }
};

import {
  POLY_SYM_OF_D,
  POLY_WORD_FOUND,
  POLY_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  isPolySymOfDFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case POLY_WORD_NOT_FOUND:
      return {
        ...state,
        isPolySymOfDFound: false,
      };

    case POLY_WORD_FOUND:
      return {
        ...state,
        isPolySymOfDFound: true,
      };
    case POLY_SYM_OF_D:
      return {
        ...state,
        isPolySymOfDFound: true,
      };
    default:
      return state;
  }
};

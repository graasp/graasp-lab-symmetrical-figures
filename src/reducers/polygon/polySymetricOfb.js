import {
  POLY_SYM_OF_B,
  POLY_WORD_FOUND,
  POLY_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  isPolySymOfBFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case POLY_WORD_NOT_FOUND:
      return {
        ...state,
        isPolySymOfBFound: false,
      };

    case POLY_WORD_FOUND:
      return {
        ...state,
        isPolySymOfBFound: true,
      };
    case POLY_SYM_OF_B:
      return {
        ...state,
        isPolySymOfBFound: true,
      };
    default:
      return state;
  }
};

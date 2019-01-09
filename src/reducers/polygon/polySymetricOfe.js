import {
  POLY_SYM_OF_E,
  POLY_WORD_FOUND,
  POLY_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = {
  isPolySymOfEFound: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case POLY_WORD_NOT_FOUND:
      return {
        ...state,
        isPolySymOfEFound: false,
      };

    case POLY_WORD_FOUND:
      return {
        ...state,
        isPolySymOfEFound: true,
      };
    case POLY_SYM_OF_E:
      return {
        ...state,
        isPolySymOfEFound: true,
      };
    default:
      return state;
  }
};

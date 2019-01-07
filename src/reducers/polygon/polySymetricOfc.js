import Immutable from 'immutable';
import {
  POLY_SYM_OF_C,
  POLY_WORD_FOUND,
  POLY_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = new Immutable.Map({
  isPolySymOfCFound: false,
});

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case POLY_WORD_NOT_FOUND:
      return {
        ...state,
        isPolySymOfCFound: false,
      };

    case POLY_WORD_FOUND:
      return {
        ...state,
        isPolySymOfCFound: true,
      };
    case POLY_SYM_OF_C:
      return {
        ...state,
        isPolySymOfCFound: true,
      };
    default:
      return state;
  }
};

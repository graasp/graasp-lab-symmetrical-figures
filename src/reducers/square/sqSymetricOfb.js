import Immutable from 'immutable';
import {
  SQ_SYM_OF_B,
  SQ_WORD_FOUND,
  SQ_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = new Immutable.Map({
  isSqSymOfBFound: false,
});

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
    case SQ_SYM_OF_B:
      return {
        ...state,
        isSqSymOfBFound: true,
      };
    default:
      return state;
  }
};

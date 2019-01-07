import Immutable from 'immutable';
import {
  TRI_SYM_OF_B,
  TRI_WORD_FOUND,
  TRI_WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = new Immutable.Map({
  isTriSymOfAFound: false,
});

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
    case TRI_SYM_OF_B:
      return {
        ...state,
        isTriSymOfAFound: true,
      };
    default:
      return state;
  }
};

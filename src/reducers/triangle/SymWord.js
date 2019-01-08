import Immutable from 'immutable';
import {
  HEADER_BACKGROUND_COLOR,
  SYMMETRIC_WORD,
  WORD_FOUND,
  WORD_NOT_FOUND,
} from '../../types';

const INITIAL_STATE = new Immutable.Map({
  wordFound: false,
});

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log('payload', payload);
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
    case HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        headerBackground: payload,
      };
    default:
      return state;
  }
};

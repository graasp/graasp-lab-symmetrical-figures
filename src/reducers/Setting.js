import {
  DEFAULT_LANGUAGE,
  HEADER_BACKGROUND_COLOR,
} from '../types';

const INITIAL_STATE = {
  defaultLanguage: 'en',
  headerBackgroundColor: '#2196F5',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DEFAULT_LANGUAGE:
      return {
        ...state,
        defaultLanguage: payload,
      };
    case HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        headerBackgroundColor: payload,
      };
    default:
      return state;
  }
};

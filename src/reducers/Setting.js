import {
  SET_CONFIG,
  SET_LANGUAGE,
  SET_HEADER_BACKGROUND_COLOR,
} from '../types';

const INITIAL_STATE = {
  changedLanguage: 'en',
  headerBackgroundColor: '#2196F5',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log('Getting new language', payload);
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        changedLanguage: payload,
      };
    case SET_HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        headerBackgroundColor: payload,
      };
    case SET_CONFIG:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

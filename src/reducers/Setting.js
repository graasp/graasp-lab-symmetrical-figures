import {
  SET_LANGUAGE,
} from '../types';

const INITIAL_STATE = {
  changedLanguage: 'en',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        changedLanguage: payload,
      };
    default:
      return state;
  }
};

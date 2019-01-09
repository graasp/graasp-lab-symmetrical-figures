import {
  HEADER_BACKGROUND_COLOR,
} from '../types';

const INITIAL_STATE = {
  headerBackgroundColor: '#2196F5',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        headerBackgroundColor: payload,
      };
    default:
      return state;
  }
};

import {
  SET_CONFIG,
  SET_LANGUAGE,
  SET_HEADER_BACKGROUND_COLOR,
  SET_TITLE_STATE,
  SET_GRID_STATE,
  SET_POINT_STATE,
} from '../types';

const INITIAL_STATE = {
  changedLanguage: 'en',
  themeColor: '#2196F5',
  showTitle: true,
  showPoints: true,
  showGrid: true,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        changedLanguage: payload,
      };
    case SET_HEADER_BACKGROUND_COLOR:
      return {
        ...state,
        themeColor: payload,
      };
    case SET_TITLE_STATE:
      return {
        ...state,
        showTitle: payload,
      };
    case SET_GRID_STATE:
      return {
        ...state,
        showGrid: payload,
      };
    case SET_POINT_STATE:
      return {
        ...state,
        showPoints: payload,
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

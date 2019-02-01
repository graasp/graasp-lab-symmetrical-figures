import {
  SET_CONFIG,
  SET_LANGUAGE,
  SET_HEADER_BACKGROUND_COLOR,
  SET_TITLE_STATE,
  SET_GRID_STATE,
  SET_POINT_STATE,
  TOGGLE_SIDE_MENU,
} from '../types';

const INITIAL_STATE = {
  changedLanguage: 'en',
  themeColor: 'rgb(0, 150, 136)',
  showTitle: true,
  showPoints: true,
  showGrid: true,
  showSideMenu: false,
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
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        showSideMenu: payload,
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

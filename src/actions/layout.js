import {
  TOGGLE_SIDE_MENU,
  TOGGLE_HEADER,
  CHANGE_THEME_COLOR,
} from '../types';

export const toggleSideMenu = payload => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDE_MENU,
    payload,
  });
};

export const toggleHeader = ({ showHeader }) => (dispatch) => {
  dispatch({
    type: TOGGLE_HEADER,
    payload: showHeader,
  });
};

export const themeColor = ({ newColor }) => (dispatch) => {
  dispatch({
    type: CHANGE_THEME_COLOR,
    payload: newColor,
  });
};

export default {
  toggleSideMenu,
  toggleHeader,
  themeColor,
};

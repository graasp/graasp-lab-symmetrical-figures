import { TOGGLE_SIDE_MENU } from '../../types';

export const toggleSideMenu = payload => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDE_MENU,
    payload,
  });
};

export default toggleSideMenu;

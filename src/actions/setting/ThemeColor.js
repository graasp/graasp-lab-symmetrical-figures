import { SET_HEADER_BACKGROUND_COLOR } from '../../types';

export const themeColor = ({ newColor }) => (dispatch) => {
  dispatch({
    type: SET_HEADER_BACKGROUND_COLOR,
    payload: newColor,
  });
};

export default themeColor;

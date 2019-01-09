import { HEADER_BACKGROUND_COLOR } from '../../types';

export const headerBackgroundColor = ({ newColor }) => (dispatch) => {
  dispatch({
    type: HEADER_BACKGROUND_COLOR,
    payload: newColor,
  });
};

export default headerBackgroundColor;

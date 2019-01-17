import { SET_POINT_STATE } from '../../types';

export const pointState = ({ showPoints }) => (dispatch) => {
  dispatch({
    type: SET_POINT_STATE,
    payload: showPoints,
  });
};

export default pointState;

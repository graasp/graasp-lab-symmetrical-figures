import { SET_GRID_STATE } from '../../types';

export const gridState = ({ showGrid }) => (dispatch) => {
  dispatch({
    type: SET_GRID_STATE,
    payload: showGrid,
  });
};

export default gridState;

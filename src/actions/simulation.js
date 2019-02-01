import {
  TOGGLE_GRID,
  TOGGLE_POINT,
} from '../types';

export const pointState = ({ showPoints }) => (dispatch) => {
  dispatch({
    type: TOGGLE_POINT,
    payload: showPoints,
  });
};

export const gridState = ({ showGrid }) => (dispatch) => {
  dispatch({
    type: TOGGLE_GRID,
    payload: showGrid,
  });
};


export default { pointState, gridState };

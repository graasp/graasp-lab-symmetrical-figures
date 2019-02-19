import {
  TOGGLE_GRID,
  TOGGLE_POINT,
} from '../types';

export const togglePoints = showPoints => (dispatch) => {
  dispatch({
    type: TOGGLE_POINT,
    payload: showPoints,
  });
};

export const toggleGrid = showGrid => (dispatch) => {
  dispatch({
    type: TOGGLE_GRID,
    payload: showGrid,
  });
};


export default { togglePoints, toggleGrid };

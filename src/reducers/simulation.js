import {
  TOGGLE_GRID,
  TOGGLE_POINT,
} from '../types';

const INITIAL_STATE = {
  showPoints: true,
  showGrid: true,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_GRID:
      return {
        ...state,
        showGrid: payload,
      };
    case TOGGLE_POINT:
      return {
        ...state,
        showPoints: payload,
      };
    default:
      return state;
  }
};

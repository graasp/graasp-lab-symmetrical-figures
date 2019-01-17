import { SET_TITLE_STATE } from '../../types';

export const titleState = ({ showTitle }) => (dispatch) => {
  dispatch({
    type: SET_TITLE_STATE,
    payload: showTitle,
  });
};

export default titleState;

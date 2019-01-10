import { SET_LANGUAGE } from '../../types';

export const changedLanguage = ({ newLang }) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: newLang,
  });
};

export default changedLanguage;

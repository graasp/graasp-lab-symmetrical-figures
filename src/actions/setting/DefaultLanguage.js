import { DEFAULT_LANGUAGE } from '../../types';

export const defaultLanguage = ({ newLang }) => (dispatch) => {
  dispatch({
    type: DEFAULT_LANGUAGE,
    payload: newLang,
  });
};

export default defaultLanguage;

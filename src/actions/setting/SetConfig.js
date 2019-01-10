export const setConfig = config => dispatch => dispatch({
  type: 'SET_CONFIG',
  payload: config,
});

export default setConfig;

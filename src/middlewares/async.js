export default ({ dispatch }) => next => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  return action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

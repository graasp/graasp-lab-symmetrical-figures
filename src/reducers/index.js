import { combineReducers } from 'redux';
import polygonReducer from './polygon';
import squareReducer from './square';
import triangleReducer from './triangle';
import layoutreducer from './layout';
import simulationReducer from './simulation';
import appInstanceReducer from './appInstance';
import contextReducer from './context';
import userReducer from './users';

export default combineReducers({
  polygon: polygonReducer,
  square: squareReducer,
  triangle: triangleReducer,
  layout: layoutreducer,
  simulation: simulationReducer,
  context: contextReducer,
  appInstance: appInstanceReducer,
  users: userReducer,
});

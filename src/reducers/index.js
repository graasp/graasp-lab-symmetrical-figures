import { combineReducers } from 'redux';
import polygonReducer from './polygon';
import squareReducer from './square';
import settingReducer from './Setting';
import triangleReducer from './triangle';
import layoutreducer from './layout';
import simulationReducer from './simulation';

export default combineReducers({
  polygon: polygonReducer,
  square: squareReducer,
  setting: settingReducer,
  triangle: triangleReducer,
  layout: layoutreducer,
  simulation: simulationReducer,
});

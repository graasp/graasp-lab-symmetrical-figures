import { combineReducers } from 'redux';
import SymWord from './SymWord';
import triSymetricOfa from './triSymetricOfa';
import triSymetricOfb from './triSymetricOfb';

export default combineReducers({
  SymWord,
  triSymetricOfa,
  triSymetricOfb,
});

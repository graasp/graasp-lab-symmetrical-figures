import {
  createStore,
} from 'redux';
import reducer from '../reducers';

const configureStore = (state) => {
  // create the store
  const store = createStore(
    state,
    reducer,
  );
  return {
    store,
  };
};

export default configureStore;

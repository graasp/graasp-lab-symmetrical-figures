import {
  createStore,
} from 'redux';
import reducers from '../reducers';

const configureStore = (state) => {
  // create the store
  const store = createStore(
    reducers,
    state,
  );
  return {
    store,
  };
};

export default configureStore;

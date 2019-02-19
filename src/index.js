import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = document.getElementById('root');
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  root,
);

registerServiceWorker();

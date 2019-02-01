import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Qs from 'qs';
import async from './middlewares/async';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Root from './components/Root';
import reducers from './reducers';
import i18n from './config/i18n';
import registerServiceWorker from './registerServiceWorker';
import { DEFAULT_LANGUAGE } from './constants/Settings';

const root = document.getElementById('root');
const initialState = {};
const renderApp = () => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, reduxThunk),
  );

  const {
    lang = DEFAULT_LANGUAGE,
  } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });

  i18n.changeLanguage(lang);


  ReactDOM.render(
    <Provider store={store}>
      <Root i18n={i18n} />
    </Provider>,
    root,
  );
};

renderApp();
registerServiceWorker();

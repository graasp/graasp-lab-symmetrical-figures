import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import async from './middlewares/async';
import reducers from './reducers';
import i18nConfig from './config/i18n';
import App from './App';

const Root = ({ initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, reduxThunk),
  );
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18nConfig}>
        <App />
      </I18nextProvider>
    </Provider>
  );
};

Root.propTypes = {
  initialState: PropTypes.shape({}).isRequired,
};

export default Root;

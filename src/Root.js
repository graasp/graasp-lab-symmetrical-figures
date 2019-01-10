import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import App from './App';

const Root = ({ i18n }) => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

Root.propTypes = {
  i18n: PropTypes.shape({
    defaultNS: PropTypes.string,
  }).isRequired,
};
export default Root;

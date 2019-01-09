import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Qs from 'qs';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';
import './App.css';

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({
      defaultNS: PropTypes.string,
    }).isRequired,
    defaultLanguage: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const {
      mode = 'default',
      lang = 'en',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const { i18n, defaultLanguage } = this.props;
    if (defaultLanguage) {
      i18n.changeLanguage(defaultLanguage);
    } else {
      i18n.changeLanguage(lang);
    }
    this.state = { mode };
  }

  render() {
    const { mode } = this.state;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        return <TeacherView />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentView />;
    }
  }
}

const mapStateToProps = state => ({
  defaultLanguage: state.Setting.defaultLanguage,
});

const connectedComponent = connect(mapStateToProps)(App);

export default withNamespaces('translations')(connectedComponent);

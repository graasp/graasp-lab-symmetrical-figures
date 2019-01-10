import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import Qs from 'qs';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    const {
      mode = 'default',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
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
  changedLanguage: state.Setting.changedLanguage,
});

const connectedComponent = connect(mapStateToProps)(App);

export default withNamespaces('translations')(connectedComponent);

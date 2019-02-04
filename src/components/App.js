import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { DEFAULT_LANG, DEFAULT_MODE } from '../config/settings';
import { getAppInstance, getContext } from '../actions';
import TeacherMode from './modes/TeacherMode';
import StudentMode from './modes/StudentMode';
import './App.css';

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({
      defaultNS: PropTypes.string,
    }).isRequired,
    dispatchGetContext: PropTypes.func.isRequired,
    dispatchGetAppInstance: PropTypes.func.isRequired,
    mode: PropTypes.string,
    lang: PropTypes.string,
  };

  static defaultProps = {
    mode: DEFAULT_MODE,
    lang: DEFAULT_LANG,
  };

  constructor(props) {
    super(props);

    props.dispatchGetContext();
    props.dispatchGetAppInstance();
  }

  componentDidMount() {
    const { lang } = this.props;
    this.handleChangeLang(lang);
  }

  componentDidUpdate({ lang: prevLang }) {
    const { lang } = this.props;
    if (lang !== prevLang) {
      this.handleChangeLang(lang);
    }
  }

  handleChangeLang = (lang) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  }

  render() {
    const { mode } = this.props;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
      case 'producer':
      case 'educator':
      case 'admin':
        return <TeacherMode />;

      // by default go with the student mode
      case 'student':
      case 'consumer':
      case 'learner':
      default:
        return <StudentMode />;
    }
  }
}

const mapStateToProps = ({ context }) => ({
  lang: context.lang,
  mode: context.mode,
  appInstance: context.appInstance,
});

const mapDispatchToProps = {
  dispatchGetContext: getContext,
  dispatchGetAppInstance: getAppInstance,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withNamespaces()(ConnectedApp);

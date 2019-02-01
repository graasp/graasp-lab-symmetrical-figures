import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import i18n from '../../../../config/i18n';
import SettingIcon from './SettingIcon';
import './Styles.css';
import Displayer from './Displayer';
import LangBox from './LangBox';
import SwitchBox from './SwitchBox';
import {
  changedLanguage,
  themeColor,
  toggleHeader,
  pointState,
  gridState,
} from '../../../../actions';
import { AppState } from '../../../../config/AppState';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    right: theme.spacing.unit * 4,
    bottom: theme.spacing.unit * 4,
    position: 'fixed',
  },
});

export class SettingModal extends Component {
  state = AppState;

  static propTypes = {
    t: PropTypes.func.isRequired,
    dispatchThemeColor: PropTypes.func.isRequired,
    dispatchDefaultLanguage: PropTypes.func.isRequired,
  };

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const { dispatchThemeColor } = this.props;
    dispatchThemeColor({ newColor });
    this.postMessage({ theme_color: newColor });
  }

  handleLang = (lang) => {
    const newLang = lang.value;
    const { dispatchDefaultLanguage } = this.props;
    i18n.changeLanguage(newLang);
    dispatchDefaultLanguage({ newLang });
    this.postMessage({ defaul_lang: newLang });
  }

  toggleTitle = () => {
    const { showHeader } = this.state;
    this.setState({ showHeader: !showHeader });
    const { dispatchTitleState } = this.props;
    dispatchTitleState({ showHeader });
    this.postMessage({ show_title: showHeader });
  }

  handlePointsDisplay = () => {
    const { showPoints } = this.state;
    this.setState({ showPoints: !showPoints });
    const { dispatchPointState } = this.props;
    dispatchPointState({ showPoints });
    this.postMessage({ show_points: showPoints });
  }

  handleCheck = () => {
    const { showGrid } = this.state;
    this.setState({ showGrid: !showGrid });
    const { dispatchGridState } = this.props;
    dispatchGridState({ showGrid });
    this.postMessage({ show_grid: showGrid });
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
    this.postMessage({ open_setting_modal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
    this.postMessage({ open_setting_modal: false });
  };

  postMessage = (data) => {
    const message = JSON.stringify(data);
    console.log('message', message);
    if (document.postMessage) {
      document.postMessage(message, '*');
    } else if (window.postMessage) {
      window.postMessage(message, '*');
    } else {
      console.error('unable to find postMessage');
    }
  };

  render() {
    const {
      t,
    } = this.props;

    const {
      openModal,
    } = this.state;

    return (
      <div className="modal-container">
        <SettingIcon onOpenModal={this.onOpenModal} />
        <Modal open={openModal} onClose={this.onCloseModal} center>
          <SwitchBox
            handleChangeComplete={this.handleChangeComplete}
            t={t}
          />
          <LangBox
            handleLang={this.handleLang}
            t={t}
          />
          <Displayer
            toggleTitle={this.toggleTitle}
            handlePointsDisplay={this.handlePointsDisplay}
            handleCheck={this.handleCheck}
            t={t}
          />
        </Modal>
      </div>
    );
  }
}


SettingModal.propTypes = {
  dispatchTitleState: PropTypes.func.isRequired,
  dispatchPointState: PropTypes.func.isRequired,
  dispatchGridState: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
});

const mapDispatchToProps = {
  dispatchThemeColor: themeColor,
  dispatchDefaultLanguage: changedLanguage,
  dispatchTitleState: toggleHeader,
  dispatchPointState: pointState,
  dispatchGridState: gridState,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(SettingModal);
const StyledComponent = withStyles(styles)(ConnectedComponent);

export default withNamespaces()(StyledComponent);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import i18n from '../../../../config/i18n';
import Settings from './Settings';
import './Styles.css';
import Displayer from './Displayer';
import LangBox from './LangBox';
import SwitchBox from './SwitchBox';
import {
  changeThemeColor,
  toggleHeader,
  togglePoints,
  toggleGrid,
  changeLanguage,
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

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const { dispatchChangeThemeColor } = this.props;
    dispatchChangeThemeColor(newColor);
    this.postMessage({ theme_color: newColor });
  }

  handleChangeLanguage = (lang) => {
    const newLang = lang.value;
    const { dispatchChangeLanguage } = this.props;
    i18n.changeLanguage(newLang);
    dispatchChangeLanguage(newLang);
  };

  handleToggleHeader = showHeader => () => {
    const { dispatchToggleHeader } = this.props;
    dispatchToggleHeader(showHeader);
    this.postMessage({ show_header: showHeader });
  }

  handleTogglePoints = showPoints => () => {
    const { dispatchTogglePoints } = this.props;
    dispatchTogglePoints(showPoints);
    this.postMessage({ show_points: showPoints });
  }

  handleToggleGrid = showGrid => () => {
    const { dispatchToggleGrid } = this.props;
    dispatchToggleGrid(showGrid);
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
      showHeader,
      showPoints,
      showGrid,
      t,
      themeColor,
    } = this.props;

    const { openModal } = this.state;

    return (
      <div className="modal-container">
        <Settings onOpenModal={this.onOpenModal} />
        <Modal open={openModal} onClose={this.onCloseModal} center>
          <SwitchBox
            themeColor={themeColor}
            handleChangeComplete={this.handleChangeComplete}
            t={t}
          />
          <LangBox
            handleLang={this.handleChangeLanguage}
            t={t}
          />
          <Displayer
            toggleTitle={this.handleToggleHeader(!showHeader)}
            handlePointsDisplay={this.handleTogglePoints(!showPoints)}
            handleCheck={this.handleToggleGrid(!showGrid)}
            t={t}
          />
        </Modal>
      </div>
    );
  }
}


SettingModal.propTypes = {
  dispatchToggleHeader: PropTypes.func.isRequired,
  dispatchTogglePoints: PropTypes.func.isRequired,
  dispatchToggleGrid: PropTypes.func.isRequired,
  dispatchChangeLanguage: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool.isRequired,
  themeColor: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  dispatchChangeThemeColor: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showPoints: state.simulation.showPoints,
  showGrid: state.simulation.showGrid,
});

const mapDispatchToProps = {
  dispatchChangeThemeColor: changeThemeColor,
  dispatchToggleHeader: toggleHeader,
  dispatchTogglePoints: togglePoints,
  dispatchToggleGrid: toggleGrid,
  dispatchChangeLanguage: changeLanguage,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(SettingModal);

const StyledComponent = withStyles(styles)(ConnectedComponent);

export default withNamespaces()(StyledComponent);

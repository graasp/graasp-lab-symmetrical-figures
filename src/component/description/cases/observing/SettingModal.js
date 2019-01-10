import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Settings';
import Fab from '@material-ui/core/Fab';
import './Styles.css';
import LangBox from './LangBox';
import SwitchBox from './SwitchBox';
import {
  changedLanguage,
  headerBackgroundColor,
} from '../../../../actions';

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
  static propTypes = {
    t: PropTypes.func.isRequired,
    dispatchHeaderBackground: PropTypes.func.isRequired,
    dispatchDefaultLanguage: PropTypes.func.isRequired,
  };

  handleChangeComplete = (color) => {
    const newColor = color.hex;
    const {
      dispatchHeaderBackground,
    } = this.props;
    dispatchHeaderBackground({ newColor });
  }

  handleLang = (lang) => {
    const newLang = lang.value;
    const {
      dispatchDefaultLanguage,
    } = this.props;
    dispatchDefaultLanguage({ newLang });
  }

  render() {
    const {
      openModal,
      onOpenModal,
      onCloseModal,
      classes,
      t,
    } = this.props;

    return (
      <div className="modal-container">
        <Fab
          color="primary"
          aria-label="Add"
          onClick={onOpenModal}
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
        <Modal open={openModal} onClose={onCloseModal} center>
          <SwitchBox
            handleChangeComplete={this.handleChangeComplete}
            t={t}
          />
          <LangBox
            handleLang={this.handleLang}
            t={t}
          />
        </Modal>
      </div>
    );
  }
}


SettingModal.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  headerBackgroundColor: state.Setting.headerBackgroundColor,
});

const mapDispatchToProps = {
  dispatchHeaderBackground: headerBackgroundColor,
  dispatchDefaultLanguage: changedLanguage,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SettingModal);
export default withStyles(styles)(connectedComponent);

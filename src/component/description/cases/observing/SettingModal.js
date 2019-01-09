import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Settings';
import Fab from '@material-ui/core/Fab';
import './Styles.css';
import LangBox from './LangBox';
import SwitchBox from './SwitchBox';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const SettingModal = ({
  openModal,
  onOpenModal,
  onCloseModal,
  handleTitle,
  showTitle,
  handlePointsDisplay,
  showPoints,
  handleCheck,
  showGrid,
  handleChangeComplete,
  handleLang,
}) => (
  <div className="modal-container">
    <Fab color="primary" aria-label="Add" onClick={onOpenModal}>
      <AddIcon />
    </Fab>
    <Modal open={openModal} onClose={onCloseModal} center>
      <SwitchBox
        handleTitle={handleTitle}
        showTitle={showTitle}
        handlePointsDisplay={handlePointsDisplay}
        showPoints={showPoints}
        handleCheck={handleCheck}
        showGrid={showGrid}
        handleChangeComplete={handleChangeComplete}
      />
      <LangBox
        handleLang={handleLang}
      />
    </Modal>
  </div>
);

SettingModal.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  handleLang: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
};
export default withStyles(styles)(SettingModal);

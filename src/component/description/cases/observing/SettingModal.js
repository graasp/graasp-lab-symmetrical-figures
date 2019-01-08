import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Button } from 'reactstrap';
import Setting from './Setting.svg';
import Configs from './SwitchBox';

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
}) => (
  <div className="modal-container">
    <Button
      color="none"
      onClick={onOpenModal}
    >
      <img
        src={Setting}
        alt="Triangle"
        className="setting-icon"
      />
    </Button>
    <Modal open={openModal} onClose={onCloseModal} center>
      <Configs
        handleTitle={handleTitle}
        showTitle={showTitle}
        handlePointsDisplay={handlePointsDisplay}
        showPoints={showPoints}
        handleCheck={handleCheck}
        showGrid={showGrid}
        handleChangeComplete={handleChangeComplete}
      />
    </Modal>
  </div>
);

SettingModal.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
};
export default SettingModal;

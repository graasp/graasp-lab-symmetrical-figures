import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';
import Switch from 'react-switch';
import {
  changedLanguage,
  headerBackgroundColor,
} from '../../../../actions';
import Forms from '../../../forms/Forms';
import RadioBtn from './RadioBtn';
import SettingModal from './SettingModal';
import { AppState } from '../../../../config/AppState';

export class Observe extends Component {
  state = AppState;

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
      handleForm,
      handleCheck,
      showGrid,
      showPoints,
      handlePointsDisplay,
      handleView,
      isTriangleActive,
      toggleLine,
      showTitle,
      handleTitle,
      openModal,
      onOpenModal,
      onCloseModal,
      t,
    } = this.props;

    return (
      <div className="observe-container">
        <Forms
          handleForm={handleForm}
          isTriangleActive={isTriangleActive}
          showTitle={showTitle}
          handleTitle={handleTitle}
          t={t}
        />
        <RadioBtn
          handleView={handleView}
          toggleLine={toggleLine}
          t={t}
        />
        <Row>
          <Col xs="6">
            <span className="display-grid">{t('Display points')}</span>
          </Col>
          <Col xs="6">
            <Switch
              onChange={handlePointsDisplay}
              checked={showPoints}
              id="point-switch"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <span className="display-line">{t('Display grid')}</span>
          </Col>
          <Col xs="6">
            <Switch
              onChange={handleCheck}
              checked={showGrid}
              id="grid-switch"
            />
          </Col>
        </Row>
        <div className="short-description">
          <h2>{t('Description')}</h2>
          <p className="description-title">
            {t('This Lab will allow you to identify the tools needed to draw symmetrical figures with respect to a point or relative to a line.')}
          </p>
          <SettingModal
            openModal={openModal}
            onOpenModal={onOpenModal}
            onCloseModal={onCloseModal}
            showTitle={showTitle}
            handleTitle={handleTitle}
            handlePointsDisplay={handlePointsDisplay}
            showPoints={showPoints}
            handleCheck={handleCheck}
            showGrid={showGrid}
            handleView={handleView}
            toggleLine={toggleLine}
            handleChangeComplete={this.handleChangeComplete}
            handleLang={this.handleLang}
            t={t}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  correct: state.headerBackgroundChanged ? 'Header Background Changed!' : 'Background has not changed. :-(',
});

const mapDispatchToProps = {
  dispatchDefaultLanguage: changedLanguage,
  dispatchHeaderBackground: headerBackgroundColor,
};


Observe.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  handleTitle: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  dispatchDefaultLanguage: PropTypes.func.isRequired,
  dispatchHeaderBackground: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Observe);

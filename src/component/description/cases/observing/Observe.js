import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';
import Switch from 'react-switch';
import Forms from '../../../forms/Forms';
import RadioBtn from './RadioBtn';

const Observe = ({
  handleForm,
  handleCheck,
  showGrid,
  showPoints,
  handlePointsDisplay,
  handleView,
  isTriangleActive,
  toggleLine,
}) => (
  <div className="main-container">
    <Forms
      handleForm={handleForm}
      isTriangleActive={isTriangleActive}
    />
    <RadioBtn
      handleView={handleView}
      toggleLine={toggleLine}
    />
    <Row>
      <Col xs="6">
        <span className="display-grid">Afficher grille</span>
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
        <span className="display-line">Afficher points</span>
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
      <h2>Description</h2>
      <p className="description-title">
        Ce Labo vous permetra de pourvoir identifier les outils nécessaires pour tracer des
        figures symétriques par rapport à un point ou par rapport à une droite.
      </p>
    </div>
  </div>
);

Observe.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
};
export default Observe;

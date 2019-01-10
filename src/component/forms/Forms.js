import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import {
  Col,
  Input,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';
import Triangle from './Triangle.svg';
import Rectangle from './Rectangle.svg';
import Polygon from './Polygon.svg';
import './Forms.css';

const Forms = ({
  handleForm,
  isTriangleActive,
  showTitle,
  handleTitle,
  t,
}) => (
  <div className="form-container">
    <Row>
      <Col xs="8">
        <h5 className="display-title">{t('Display Lab title')}</h5>
      </Col>
      <Col xs="4">
        <Switch
          onChange={handleTitle}
          checked={showTitle}
          id="title-switch"
        />
      </Col>
    </Row>
    <h2 className="description-choice">
      {t('Choose a form')}
    </h2>
    <Row>
      <Col md={4}>
        <img
          src={Triangle}
          alt="Triangle"
          className="triangle-figure"
          id="triangleTooltip"
        />
        <UncontrolledTooltip placement="top" target="triangleTooltip">
          {t('Triangle')}
        </UncontrolledTooltip>
      </Col>
      <Col md={4}>
        <img
          src={Rectangle}
          alt="Rectangle"
          className="rectangle-figure"
          id="rectangleTooltip"
        />
        <UncontrolledTooltip placement="top" target="rectangleTooltip">
          {t('Square')}
        </UncontrolledTooltip>
      </Col>
      <Col md={4}>
        <img
          src={Polygon}
          alt="Polygon"
          className="polygon-figure"
          id="polygonTooltip"
        />
        <UncontrolledTooltip placement="top" target="polygonTooltip">
          {('Polygon')}
        </UncontrolledTooltip>
      </Col>
    </Row>
    <Row className="forms-choice">
      <Col md={4}>
        <Input
          type="radio"
          name="form-choice"
          checked={isTriangleActive}
          className="form-checker"
          onChange={e => handleForm(e, 'triangle')}
        />
      </Col>
      <Col md={4}>
        <Input
          type="radio"
          name="form-choice"
          className="form-checker"
          onChange={e => handleForm(e, 'square')}
        />
      </Col>
      <Col md={4}>
        <Input
          type="radio"
          name="form-choice"
          className="form-checker"
          onChange={e => handleForm(e, 'polygon')}
        />
      </Col>
    </Row>
  </div>
);

Forms.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};
export default Forms;

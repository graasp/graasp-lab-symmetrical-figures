import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Input,
  UncontrolledTooltip,
} from 'reactstrap';
import { ReactComponent as Triangle } from './Triangle.svg';
import { ReactComponent as Rectangle } from './Rectangle.svg';
import { ReactComponent as Polygon } from './Polygon.svg';
import './Forms.css';

const Forms = ({
  handleForm,
  isTriangleActive,
  t,
}) => (
  <div className="form-container">
    <h2 className="description-choice">
      {t('Choose a form')}
    </h2>
    <div className="flex-parent">
      <Col md={4}>
        <Triangle
          alt="Triangle"
          className="triangle-figure"
          id="triangleTooltip"
        />
        <UncontrolledTooltip placement="top" target="triangleTooltip">
          {t('Triangle')}
        </UncontrolledTooltip>
      </Col>
      <Col md={4}>
        <Rectangle
          alt="Rectangle"
          className="rectangle-figure"
          id="rectangleTooltip"
        />
        <UncontrolledTooltip placement="top" target="rectangleTooltip">
          {t('Square')}
        </UncontrolledTooltip>
      </Col>
      <Col md={4}>
        <Polygon
          alt="Polygon"
          className="rectangle-figure"
          id="polygonTooltip"
        />
        <UncontrolledTooltip placement="top" target="polygonTooltip">
          {('Polygon')}
        </UncontrolledTooltip>
      </Col>
    </div>
    <div className="forms-choice">
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
    </div>
  </div>
);

Forms.propTypes = {
  handleForm: PropTypes.func.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};
export default Forms;

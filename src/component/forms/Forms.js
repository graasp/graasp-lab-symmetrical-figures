import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Input,
  Row,
} from 'reactstrap';
import Triangle from './Triangle.svg';
import Rectangle from './Rectangle.svg';
import Polygon from './Polygon.svg';
import './Forms.css';

const Forms = ({ handleForm }) => (
  <div className="main-container">
    <h2 className="description-choice">
      Choisissez une forme
    </h2>
    <Row>
      <Col md={4}>
        <img
          src={Triangle}
          alt="Triangle"
          className="triangle-figure"
        />
      </Col>
      <Col md={4}>
        <img
          src={Rectangle}
          alt="Rectangle"
          className="rectangle-figure"
        />
      </Col>
      <Col md={4}>
        <img
          src={Polygon}
          alt="Polygon"
          className="polygon-figure"
        />
      </Col>
    </Row>
    <Row className="forms-choice">
      <Col md={4}>
        <Input
          type="radio"
          name="form-choice"
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
};
export default Forms;

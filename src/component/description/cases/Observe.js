import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import Line from './Line.svg';
import Point from './Point.svg';
import Forms from '../../forms/Forms';

const Observe = ({
  handleForm,
  handleCheck,
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
    <h2 className="description-symetri">
      Symétrie par rapport à
    </h2>
    <div className="dots-or-line-choice">
      <div className="dot-choice">
        <img
          src={Point}
          alt="Point"
          className="point-figure"
        />
        <Input
          type="radio"
          checked={toggleLine}
          name="kind-checker"
          onChange={handleView}
        />
      </div>
      <div className="line-choice">
        <img
          src={Line}
          alt="Line"
          className="line-figure"
        />
        <Input
          type="radio"
          name="kind-checker"
          onChange={handleView}
        />
      </div>
    </div>
    <div className="description-checkbox">
      <div className="displayer displayer-one">
        <h2 className="display-line">Afficher grille</h2>
        <Input
          type="checkbox"
          className="choice-checker"
          onClick={handleCheck}
        />
      </div>
      <div className="displayer">
        <h2 className="display-point">Afficher points</h2>
        <Input
          type="checkbox"
          className="choice-checker"
          onClick={handlePointsDisplay}
        />
      </div>
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
};
export default Observe;

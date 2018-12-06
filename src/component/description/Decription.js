import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';
import './Description.css';
import Triangle from './Triangle.svg';
import Rectangle from './Rectangle.svg';
import Polygon from './Polygon.svg';
import Line from './Line.svg';
import Point from './Point.svg';

const Decription = ({ handleCheck }) => (
  <div className="main-container">
    <Button
      outline
      color="secondary"
      className=" observe-button"
    >
      Observer
    </Button>
    <Button
      outline
      color="secondary"
      className="test-button"
    >
      Tester
    </Button>
    <h2 className="description-choice">
      Choisissez une forme
    </h2>
    <img src={Triangle} alt="Triangle" className="" />
    <img src={Rectangle} alt="Rectangle" className="rectangle-figure" />
    <img src={Polygon} alt="Polygon" className="" />
    <h2 className="description-symetri">
      Symétrie par rapport à
    </h2>
    <img src={Point} alt="Point" className="point-figure" />
    <img src={Line} alt="Line" className="" />
    <div className="description-checkbox">
      <div className="displayer displayer-one">
        <h2 className="display-line">Afficher grille</h2>
        <Input type="checkbox" className="choice-checker" onClick={handleCheck} />
      </div>
      <div className="displayer">
        <h2 className="display-point">Afficher points</h2>
        <Input type="checkbox" className="choice-checker" />
      </div>
    </div>
  </div>
);

Decription.propTypes = {
  handleCheck: PropTypes.func.isRequired,
};
export default Decription;

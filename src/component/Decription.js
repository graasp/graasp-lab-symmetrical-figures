import React from 'react';
import { Button } from 'reactstrap';
import './Description.css';

const Decription = () => (
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
    <h2 className="description-title">
      Choisissez une forme
    </h2>

  </div>
);

export default Decription;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './Try.css';
import TableContent from '../table/TableContent';
import StepOne from '../steps/StepOne';
import TrianglePractice from '../exercices/TrianglePractice';
import SquarePractice from '../exercices/SquarePractice';
import PolygonPractice from '../exercices/PolygonPractice';

const Try = ({
  foundWord,
  handleDatas,
  handleSymWord,
  handleSymetricWord,
  isPolygonActive,
  isSquareActive,
  isTriangleActive,
  symOfAFound,
  symOfBFound,
  symOfCFound,
  symOfDFound,
  sqSymOfAFound,
  sqSymOfBFound,
  sqSymOfDFound,
  polySymOfAFound,
  polySymOfBFound,
  polySymOfCFound,
  polySymOfDFound,
  polySymOfEFound,
  toggleLine,
}) => (
  <div className="testing-container">
    <StepOne />
    <TableContent
      handleDatas={handleDatas}
      isPolygonActive={isPolygonActive}
      isSquareActive={isSquareActive}
    />
    { isTriangleActive ? (
      <TrianglePractice
        toggleLine={toggleLine}
        foundWord={foundWord}
        symOfAFound={symOfAFound}
        symOfBFound={symOfBFound}
        symOfCFound={symOfCFound}
        symOfDFound={symOfDFound}
        handleSymetricWord={handleSymetricWord}
      />
    ) : ''
    }
    { isSquareActive ? (
      <SquarePractice
        toggleLine={toggleLine}
        foundWord={foundWord}
        sqSymOfAFound={sqSymOfAFound}
        sqSymOfBFound={sqSymOfBFound}
        sqSymOfDFound={sqSymOfDFound}
        handleSymetricWord={handleSymetricWord}
      />
    ) : ''
    }
    { isPolygonActive ? (
      <PolygonPractice
        toggleLine={toggleLine}
        foundWord={foundWord}
        polySymOfAFound={polySymOfAFound}
        polySymOfBFound={polySymOfBFound}
        polySymOfCFound={polySymOfCFound}
        polySymOfDFound={polySymOfDFound}
        polySymOfEFound={polySymOfEFound}
        handleSymetricWord={handleSymetricWord}
      />
    ) : ''
    }

    <Button
      color="secondary"
      onClick={handleSymWord}
      className="verfy-answer"
    >
      Vérifier mes réponses
    </Button>
  </div>
);

Try.propTypes = {
  foundWord: PropTypes.bool.isRequired,
  handleDatas: PropTypes.func.isRequired,
  handleSymWord: PropTypes.func.isRequired,
  handleSymetricWord: PropTypes.func.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  symOfAFound: PropTypes.bool.isRequired,
  symOfBFound: PropTypes.bool.isRequired,
  symOfCFound: PropTypes.bool.isRequired,
  symOfDFound: PropTypes.bool.isRequired,
  sqSymOfAFound: PropTypes.bool.isRequired,
  sqSymOfBFound: PropTypes.bool.isRequired,
  sqSymOfDFound: PropTypes.bool.isRequired,
  polySymOfAFound: PropTypes.bool.isRequired,
  polySymOfBFound: PropTypes.bool.isRequired,
  polySymOfCFound: PropTypes.bool.isRequired,
  polySymOfDFound: PropTypes.bool.isRequired,
  polySymOfEFound: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};
export default Try;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Description.css';
import Observe from './cases/observing/Observe';
import TabComponent from './TabComponent';
import Try from './cases/trying/Try';
import { CoordState } from '../../config/CoordState';
import {
  FR_SYMETRIC_WORD,
  SYMETRIC_OF_A,
  SYMETRIC_OF_C,
  SQ_COORD_A,
  SQ_COORD_B,
  SQ_COORD_C,
  SQ_COORD_D,
  TRI_COORD_A,
  TRI_COORD_B,
  TRI_COORD_C,
} from '../../constants/Coordinates';

export class Description extends Component {
  state = CoordState;

  handleCase = (e, value) => {
    if (value === 'observing') {
      this.setState({
        swicthCase: true,
      });
    }
    if (value === 'testing') {
      this.setState({
        swicthCase: false,
      });
    }
  }

  handleSymetricWord = (e, usecase) => {
    const typedWords = e.target.value;
    switch (usecase) {
      case 'symmetricWord':
        if (typedWords.length === FR_SYMETRIC_WORD.length) {
          const convertedWords = this.compareWords(typedWords, FR_SYMETRIC_WORD);
          if (convertedWords === 0) {
            this.setState({
              isWordFound: true,
            });
          } else if (convertedWords === 1 || convertedWords === -1) {
            this.setState({
              isWordFound: false,
            });
          }
        }
        break;
      case 'symmetricOfA':
        if (typedWords.length === SYMETRIC_OF_A.length) {
          const convertedWords = this.compareWords(typedWords, SYMETRIC_OF_A);
          if (convertedWords === 0) {
            this.setState({
              isSymOfAFound: true,
            });
          } else if (convertedWords === 1 || convertedWords === -1) {
            this.setState({
              isSymOfAFound: false,
            });
          }
        }
        break;
      case 'symmetricOfC':
        if (typedWords.length === SYMETRIC_OF_C.length) {
          const convertedWords = this.compareWords(typedWords, SYMETRIC_OF_C);
          if (convertedWords === 0) {
            this.setState({
              isSymOfCFound: true,
            });
          } else if (convertedWords === 1 || convertedWords === -1) {
            this.setState({
              isSymOfCFound: false,
            });
          }
        }
        break;
      default:
        this.setState({
          isWordFound: false,
          isSymOfAFound: false,
          isSymOfCFound: false,
        });
    }
  }

  compareWords = (typedWords, symmetricWord) => {
    const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return w1.localeCompare(w2);
  }

  handleDatas = (event) => {
    console.log('fffff');
    event.preventDefault();
    const { dataset, value } = event.target;
    const { axis, point } = dataset;
    const parsedValue = Number.parseInt(value, 10);
    const { kind } = this.props;
    const {
      triCoordA,
      triCoordB,
      triCoordC,
      sqCoordA,
      sqCoordB,
      sqCoordC,
      sqCoordD,
    } = this.state;
    switch (true) {
      case ((point === 'A') && (kind === 'triangle')):
        this.cheCheckCoordinates(axis, parsedValue, point, triCoordA);
        break;
      case ((point === 'B') && (kind === 'triangle')):
        this.cheCheckCoordinates(axis, parsedValue, point, triCoordB);
        break;
      case ((point === 'C') && (kind === 'triangle')):
        this.cheCheckCoordinates(axis, parsedValue, point, triCoordC);
        break;
      case ((point === 'A') && (kind === 'square')):
        this.cheCheckCoordinates(axis, parsedValue, point, sqCoordA);
        break;
      case ((point === 'B') && (kind === 'square')):
        this.cheCheckCoordinates(axis, parsedValue, point, sqCoordB);
        break;
      case ((point === 'C') && (kind === 'square')):
        this.cheCheckCoordinates(axis, parsedValue, point, sqCoordC);
        break;
      case ((point === 'D') && (kind === 'square')):
        this.cheCheckCoordinates(axis, parsedValue, point, sqCoordD);
        break;
      default:
        this.cheCheckCoordinates(axis, parsedValue, point, triCoordA, kind);
    }
  }

  cheCheckCoordinates = (axis, parsedValue, point, coordinates, kind) => {
    const newCoordinates = [...coordinates];
    if (axis === 'x') {
      newCoordinates[0].x = parsedValue;
    } else if (axis === 'y') {
      newCoordinates[0].y = parsedValue;
    }
    if ((point === 'A') && (kind === 'triangle')) {
      this.setState({
        triCoordA: newCoordinates,
      });
    }
    if ((point === 'B') && (kind === 'triangle')) {
      this.setState({
        triCoordB: newCoordinates,
      });
    }
    if ((point === 'C') && (kind === 'triangle')) {
      this.setState({
        triCoordC: newCoordinates,
      });
    }
    if ((point === 'A') && (kind === 'square')) {
      this.setState({
        sqCoordA: newCoordinates,
      });
    }
    if ((point === 'B') && (kind === 'square')) {
      this.setState({
        sqCoordB: newCoordinates,
      });
    }
    if ((point === 'C') && (kind === 'square')) {
      this.setState({
        sqCoordC: newCoordinates,
      });
    }
    if ((point === 'D') && (kind === 'square')) {
      this.setState({
        sqCoordD: newCoordinates,
      });
    }
  }

  handleVerify = () => {
    const {
      isWordFound,
      isSymOfAFound,
      isSymOfCFound,
      sqCoordA,
      sqCoordB,
      sqCoordC,
      sqCoordD,
      triCoordA,
      triCoordB,
      triCoordC,
    } = this.state;
    const compareACoord = this.isArrayEqual(triCoordA, TRI_COORD_A);
    const compareBCoord = this.isArrayEqual(triCoordB, TRI_COORD_B);
    const compareCCoord = this.isArrayEqual(triCoordC, TRI_COORD_C);
    const compareSqACoord = this.isArrayEqual(sqCoordA, SQ_COORD_A);
    const compareSqBCoord = this.isArrayEqual(sqCoordB, SQ_COORD_B);
    const compareSqCCoord = this.isArrayEqual(sqCoordC, SQ_COORD_C);
    const compareSqDCoord = this.isArrayEqual(sqCoordD, SQ_COORD_D);
    // console.log('Printing A coords comparison', compareACoord);
    // console.log('Printing B coords comparison', compareBCoord);
    // console.log('Printing C coords comparison', compareCCoord);
    if (compareACoord && compareBCoord && compareCCoord) {
      // console.log('Youpiii TRIANGLE corrdinates match. Congrats');
    }

    if (compareSqACoord && compareSqBCoord && compareSqCCoord && compareSqDCoord) {
      // console.log('Youpiii SQUARE corrdinates match. Congrats');
    }

    if (isWordFound) {
      this.setState({
        foundWord: true,
      });
    }
    if (isSymOfAFound) {
      this.setState({
        symOfAFound: true,
      });
    }
    if (isSymOfCFound) {
      this.setState({
        symOfCFound: true,
      });
    }
  };

  isArrayEqual = (array1, array2) => _(array1).differenceWith(array2, _.isEqual).isEmpty();

  render() {
    const {
      handleForm,
      handleCheck,
      handlePointsDisplay,
      handleView,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      toggleLine,
    } = this.props;
    const {
      foundWord,
      symOfAFound,
      symOfCFound,
      swicthCase,
    } = this.state;
    return (
      <div className="desc-container">
        <TabComponent swicthCase={swicthCase} handleCase={this.handleCase} />
        { swicthCase ? (
          <Observe
            handleForm={handleForm}
            handleCheck={handleCheck}
            handlePointsDisplay={handlePointsDisplay}
            handleView={handleView}
            isTriangleActive={isTriangleActive}
            toggleLine={toggleLine}
          />
        ) : (
          <Try
            foundWord={foundWord}
            handleDatas={this.handleDatas}
            handleSymetricWord={this.handleSymetricWord}
            handleVerify={this.handleVerify}
            isPolygonActive={isPolygonActive}
            isSquareActive={isSquareActive}
            isTriangleActive={isTriangleActive}
            symOfAFound={symOfAFound}
            symOfCFound={symOfCFound}
            toggleLine={toggleLine}
          />
        )
        }
      </div>
    );
  }
}

Description.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};
export default Description;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  searchWord,
  polySymetricOfb,
  polySymetricOfc,
  polySymetricOfd,
  polySymetricOfe,
  sqSymetricOfb,
  sqSymetricOfc,
  sqSymetricOfd,
  triSymetricOfa,
  triSymetricOfb,
} from '../../actions';
import './Description.css';
import Observe from './cases/observing/Observe';
import Try from './cases/trying/Try';
import { CoordState } from '../../config/CoordState';
import {
  SQ_COORD_A,
  SQ_COORD_B,
  SQ_COORD_C,
  SQ_COORD_D,
  TRI_COORD_A,
  TRI_COORD_B,
  TRI_COORD_C,
  POLY_COORD_A,
  POLY_COORD_B,
  POLY_COORD_C,
  POLY_COORD_D,
  POLY_COORD_E,
} from '../../constants/Coordinates';

export class Description extends Component {
  state = CoordState;

  handleCase = (e, value) => {
    if (value === 'observing') {
      this.setState({
        obserViewActive: true,
      });
    }
    if (value === 'testing') {
      this.setState({
        obserViewActive: false,
      });
    }
  }

  handleSymWord = () => {
    const {
      kind, usecase, typedWords,
    } = this.state;

    const {
      dispatchPolySymOfb,
      dispatchPolySymOfc,
      dispatchPolySymOfd,
      dispatchPolySymOfe,
      dispatchSqSymOfb,
      dispatchSqSymOfc,
      dispatchSqSymOfd,
      dispatchTriSymOfa,
      dispatchTriSymOfc,
      dispatchSearchWord,
    } = this.props;
    dispatchSearchWord({ kind, typedWords, usecase });
    dispatchPolySymOfb({ kind, typedWords, usecase });
    dispatchPolySymOfc({ kind, typedWords, usecase });
    dispatchPolySymOfd({ kind, typedWords, usecase });
    dispatchPolySymOfe({ kind, typedWords, usecase });
    dispatchSqSymOfb({ kind, typedWords, usecase });
    dispatchSqSymOfc({ kind, typedWords, usecase });
    dispatchSqSymOfd({ kind, typedWords, usecase });
    dispatchTriSymOfa({ kind, typedWords, usecase });
    dispatchTriSymOfc({ kind, typedWords, usecase });
  }

  handleSymetricWord = (e, usecase, kind) => {
    const typedWords = e.target.value;
    this.setState({
      kind,
      typedWords,
      usecase,
    });
  }

  compareWords = (typedWords, symmetricWord) => {
    const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return w1.localeCompare(w2);
  }

  handleDatas = (event) => {
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
      polyCoordA,
      polyCoordB,
      polyCoordC,
      polyCoordD,
      polyCoordE,
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
      case ((point === 'A') && (kind === 'polygon')):
        this.cheCheckCoordinates(axis, parsedValue, point, polyCoordA);
        break;
      case ((point === 'B') && (kind === 'polygon')):
        this.cheCheckCoordinates(axis, parsedValue, point, polyCoordB);
        break;
      case ((point === 'C') && (kind === 'polygon')):
        this.cheCheckCoordinates(axis, parsedValue, point, polyCoordC);
        break;
      case ((point === 'D') && (kind === 'polygon')):
        this.cheCheckCoordinates(axis, parsedValue, point, polyCoordD);
        break;
      case ((point === 'E') && (kind === 'polygon')):
        this.cheCheckCoordinates(axis, parsedValue, point, polyCoordE);
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
    if ((point === 'A') && (kind === 'polygon')) {
      this.setState({
        polyCoordA: newCoordinates,
      });
    }
    if ((point === 'B') && (kind === 'polygon')) {
      this.setState({
        polyCoordB: newCoordinates,
      });
    }
    if ((point === 'C') && (kind === 'polygon')) {
      this.setState({
        polyCoordC: newCoordinates,
      });
    }
    if ((point === 'D') && (kind === 'polygon')) {
      this.setState({
        polyCoordD: newCoordinates,
      });
    }
    if ((point === 'E') && (kind === 'polygon')) {
      this.setState({
        polyCoordE: newCoordinates,
      });
    }
  }

  handleVerify = () => {
    const {
      isWordFound,
      isTriSymOfAFound,
      isTriSymOfCFound,
      isSqSymOfAFound,
      isSqSymOfBFound,
      isSqSymOfDFound,
      isPolySymOfAFound,
      isPolySymOfBFound,
      isPolySymOfCFound,
      isPolySymOfDFound,
      isPolySymOfEFound,
      polyCoordA,
      polyCoordB,
      polyCoordC,
      polyCoordD,
      polyCoordE,
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
    const comparePolyACoord = this.isArrayEqual(polyCoordA, POLY_COORD_A);
    const comparePolyBCoord = this.isArrayEqual(polyCoordB, POLY_COORD_B);
    const comparePolyCCoord = this.isArrayEqual(polyCoordC, POLY_COORD_C);
    const comparePolyDCoord = this.isArrayEqual(polyCoordD, POLY_COORD_D);
    const comparePolyECoord = this.isArrayEqual(polyCoordE, POLY_COORD_E);
    // console.log('Printing A coords comparison', compareACoord);
    // console.log('Printing B coords comparison', compareBCoord);
    // console.log('Printing C coords comparison', compareCCoord);
    if (compareACoord && compareBCoord && compareCCoord) {
      // console.log('Youpiii TRIANGLE corrdinates match. Congrats');
    }

    if (compareSqACoord && compareSqBCoord && compareSqCCoord && compareSqDCoord) {
      // console.log('Youpiii SQUARE corrdinates match. Congrats');
    }

    if (comparePolyACoord && comparePolyBCoord && comparePolyCCoord
      && comparePolyDCoord && comparePolyECoord) {
      // console.log('Youpiii POLYGON corrdinates match. Congrats');
    }

    if (isWordFound) {
      this.setState({
        foundWord: true,
      });
    }
    if (isTriSymOfAFound) {
      this.setState({
        symOfAFound: true,
      });
    }
    if (isTriSymOfCFound) {
      this.setState({
        symOfCFound: true,
      });
    }
    if (isSqSymOfAFound) {
      this.setState({
        sqSymOfAFound: true,
      });
    }
    if (isSqSymOfBFound) {
      this.setState({
        sqSymOfBFound: true,
      });
    }
    if (isSqSymOfDFound) {
      this.setState({
        sqSymOfDFound: true,
      });
    }

    if (isPolySymOfAFound) {
      this.setState({
        polySymOfAFound: true,
      });
    }
    if (isPolySymOfBFound) {
      this.setState({
        polySymOfBFound: true,
      });
    }
    if (isPolySymOfCFound) {
      this.setState({
        polySymOfCFound: true,
      });
    }
    if (isPolySymOfDFound) {
      this.setState({
        polySymOfDFound: true,
      });
    }
    if (isPolySymOfEFound) {
      this.setState({
        polySymOfEFound: true,
      });
    }
  };

  isArrayEqual = (array1, array2) => _(array1).differenceWith(array2, _.isEqual).isEmpty();

  render() {
    const {
      handleForm,
      handleView,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      toggleLine,
      showTitle,
      t,
    } = this.props;
    const {
      foundWord,
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
      obserViewActive,
    } = this.state;
    return (
      <div className="desc-container">
        { obserViewActive ? (
          <Observe
            handleForm={handleForm}
            handleView={handleView}
            isTriangleActive={isTriangleActive}
            toggleLine={toggleLine}
            showTitle={showTitle}
            t={t}
          />
        ) : (
          <Try
            foundWord={foundWord}
            handleDatas={this.handleDatas}
            handleSymWord={this.handleSymWord}
            handleSymetricWord={this.handleSymetricWord}
            handleVerify={this.handleVerify}
            isPolygonActive={isPolygonActive}
            isSquareActive={isSquareActive}
            isTriangleActive={isTriangleActive}
            symOfAFound={symOfAFound}
            symOfBFound={symOfBFound}
            symOfCFound={symOfCFound}
            symOfDFound={symOfDFound}
            sqSymOfAFound={sqSymOfAFound}
            sqSymOfBFound={sqSymOfBFound}
            sqSymOfDFound={sqSymOfDFound}
            toggleLine={toggleLine}
            polySymOfAFound={polySymOfAFound}
            polySymOfBFound={polySymOfBFound}
            polySymOfCFound={polySymOfCFound}
            polySymOfDFound={polySymOfDFound}
            polySymOfEFound={polySymOfEFound}
          />
        )
        }
      </div>
    );
  }
}

Description.propTypes = {
  dispatchPolySymOfb: PropTypes.func.isRequired,
  dispatchPolySymOfc: PropTypes.func.isRequired,
  dispatchPolySymOfd: PropTypes.func.isRequired,
  dispatchPolySymOfe: PropTypes.func.isRequired,
  dispatchSqSymOfb: PropTypes.func.isRequired,
  dispatchSqSymOfc: PropTypes.func.isRequired,
  dispatchSqSymOfd: PropTypes.func.isRequired,
  dispatchTriSymOfa: PropTypes.func.isRequired,
  dispatchTriSymOfc: PropTypes.func.isRequired,
  dispatchSearchWord: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

// we make sure the svg is gotten from our redux state and is mounted
const mapStateToProps = state => ({
  correct: state.comments ? 'This is correct!' : 'This is not correct. :-(',
});

const mapDispatchToProps = {
  dispatchSearchWord: searchWord,
  dispatchPolySymOfb: polySymetricOfb,
  dispatchPolySymOfc: polySymetricOfc,
  dispatchPolySymOfd: polySymetricOfd,
  dispatchPolySymOfe: polySymetricOfe,
  dispatchSqSymOfb: sqSymetricOfb,
  dispatchSqSymOfc: sqSymetricOfc,
  dispatchSqSymOfd: sqSymetricOfd,
  dispatchTriSymOfa: triSymetricOfa,
  dispatchTriSymOfc: triSymetricOfb,
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);

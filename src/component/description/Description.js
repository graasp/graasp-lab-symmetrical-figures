import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from 'reactstrap';
import './Description.css';
import Observe from './cases/Observe';
import Try from './cases/Try';
import { CoordState } from '../../config/CoordState';
import { TRI_COORD_A, TRI_COORD_B, TRI_COORD_C } from '../../constants/Coordinates';

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

  handleDatas = (event) => {
    event.preventDefault();
    const { dataset, value } = event.target;
    const { axis, point } = dataset;
    const parsedValue = Number.parseInt(value, 10);
    if (point === 'A') {
      this.cheCheckACoordinates(axis, parsedValue);
    }
    if (point === 'B') {
      this.cheCheckBCoordinates(axis, parsedValue);
    }
    if (point === 'C') {
      this.cheCheckCCoordinates(axis, parsedValue);
    }
  }

  cheCheckACoordinates = (axis, parsedValue) => {
    const { triCoordA } = this.state;
    const newTriCoordA = [...triCoordA];
    if (axis === 'x') {
      newTriCoordA[0].x = parsedValue;
      this.setState({
        triCoordA: newTriCoordA,
      });
    } else if (axis === 'y') {
      newTriCoordA[0].y = parsedValue;
      this.setState({
        triCoordA: newTriCoordA,
      });
    }
  }

  cheCheckBCoordinates = (axis, parsedValue) => {
    const { triCoordB } = this.state;
    const newTriCoordB = [...triCoordB];
    if (axis === 'x') {
      newTriCoordB[0].x = parsedValue;
      this.setState({
        triCoordB: newTriCoordB,
      });
    } else if (axis === 'y') {
      newTriCoordB[0].y = parsedValue;
      this.setState({
        triCoordB: newTriCoordB,
      });
    }
  }

  cheCheckCCoordinates = (axis, parsedValue) => {
    const { triCoordC } = this.state;
    const newTriCoordC = [...triCoordC];
    if (axis === 'x') {
      newTriCoordC[0].x = parsedValue;
      this.setState({
        triCoordC: newTriCoordC,
      });
    } else if (axis === 'y') {
      newTriCoordC[0].y = parsedValue;
      this.setState({
        triCoordC: newTriCoordC,
      });
    }
  }

  handleVerify = () => {
    const { triCoordA, triCoordB, triCoordC } = this.state;
    // console.log('triCoordA', triCoordA, TRI_COORD_A);
    const compareACoord = this.isArrayEqual(triCoordA, TRI_COORD_A);
    const compareBCoord = this.isArrayEqual(triCoordB, TRI_COORD_B);
    const compareCCoord = this.isArrayEqual(triCoordC, TRI_COORD_C);
    // console.log('Printing A coords comparison', compareACoord);
    // console.log('Printing B coords comparison', compareBCoord);
    // console.log('Printing C coords comparison', compareCCoord);
    if (compareACoord && compareBCoord && compareCCoord) {
      // console.log('Youpiii all corrdinates match. Congrats');
    }
  };

  isArrayEqual = (array1, array2) => _(array1).differenceWith(array2, _.isEqual).isEmpty()

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
    const { swicthCase } = this.state;
    return (
      <div className="desc-container">
        <Button
          outline
          color="secondary"
          className={`${swicthCase ? 'observe-button-active' : ''} observe-button`}
          onClick={e => this.handleCase(e, 'observing')}
        >
          Observer
        </Button>
        <Button
          outline
          color="secondary"
          className={`${swicthCase ? '' : 'test-button-active'} test-button`}
          onClick={e => this.handleCase(e, 'testing')}
        >
          Tester
        </Button>
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
            handleDatas={this.handleDatas}
            handleVerify={this.handleVerify}
            isPolygonActive={isPolygonActive}
            isSquareActive={isSquareActive}
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
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};
export default Description;

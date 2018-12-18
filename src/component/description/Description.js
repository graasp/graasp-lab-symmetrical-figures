import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './Description.css';
import Observe from './cases/Observe';
import Try from './cases/Try';
import { AppState } from '../../config/AppState';

export class Description extends Component {
  state = AppState;

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

  render() {
    const {
      handleForm,
      handleCheck,
      handlePointsDisplay,
      handleView,
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
            handleView={handleView}
            handlePointsDisplay={handlePointsDisplay}
            isTriangleActive={isTriangleActive}
            toggleLine={toggleLine}
          />
        ) : (
          <Try />
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
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};
export default Description;

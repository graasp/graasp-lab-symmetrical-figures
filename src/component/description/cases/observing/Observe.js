import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../../../forms/Forms';
import RadioBtn from './RadioBtn';
import { AppState } from '../../../../config/AppState';

export class Observe extends Component {
  state = AppState;

  render() {
    const {
      handleForm,
      handleView,
      isTriangleActive,
      toggleLine,
      t,
    } = this.props;

    return (
      <div className="observe-container">
        <div className="short-description">
          <h2>{t('Description')}</h2>
          <p className="description-title">
            {t('This Lab will allow you to identify the tools needed to draw symmetrical figures with respect to a point or relative to a line.')}
          </p>
        </div>
        <Forms
          handleForm={handleForm}
          isTriangleActive={isTriangleActive}
          t={t}
        />
        <RadioBtn
          handleView={handleView}
          toggleLine={toggleLine}
          t={t}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  correct: state.headerBackgroundChanged ? 'Header Background Changed!' : 'Background has not changed. :-(',
});


Observe.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Observe);

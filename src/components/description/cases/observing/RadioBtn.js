import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioBtn = ({
  handleView,
  toggleLine,
  t,
}) => (
  <div className="dots-or-line-choice">
    <h2 className="description-symetrie">
      {t('Symmetry with respect to')}
    </h2>

    <div className="radio-buton">
      <RadioGroup onChange={handleView} horizontal>
        <RadioButton value="line" checked={!toggleLine}>
          {t('A Line')}
        </RadioButton>
        <RadioButton value="point" checked={toggleLine}>
          {t('A Point')}
        </RadioButton>
      </RadioGroup>
    </div>
  </div>
);

RadioBtn.propTypes = {
  handleView: PropTypes.func.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default RadioBtn;

import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioBtn = ({
  handleView,
  toggleLine,
}) => (
  <div className="dots-or-line-choice">
    <h2 className="description-symetrie">
      Symétrie par rapport à
    </h2>

    <div className="radio-buton">
      <RadioGroup onChange={handleView} horizontal>
        <RadioButton value="line" checked={!toggleLine}>
          Une Ligne
        </RadioButton>
        <RadioButton value="point" checked={toggleLine}>
          Un Point
        </RadioButton>
      </RadioGroup>
    </div>
  </div>
);

RadioBtn.propTypes = {
  handleView: PropTypes.func.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};

export default RadioBtn;

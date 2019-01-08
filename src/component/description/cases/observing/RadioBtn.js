import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioBtn = ({
  handleView,
}) => (
  <div className="dots-or-line-choice">
    <h2 className="description-symetrie">
      Symétrie par rapport à
    </h2>

    <div className="radio-buton">
      <RadioGroup onChange={handleView} horizontal>
        <RadioButton value="point">
          Un Ligne
        </RadioButton>
        <RadioButton value="line">
          Une Point
        </RadioButton>
      </RadioGroup>
    </div>
  </div>
);

RadioBtn.propTypes = {
  handleView: PropTypes.func.isRequired,
};

export default RadioBtn;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const Axes = ({
  axePointsOne,
  axePointsTwo,
  axePointsThree,
}) => (
  <Layer>
    <Line points={[axePointsOne[0], axePointsOne[1], axePointsOne[2], axePointsOne[3]]} stroke="#0091EA" strokeWidth={0.5} />
    <Line points={[axePointsTwo[0], axePointsTwo[1], axePointsTwo[2], axePointsTwo[3]]} stroke="#0091EA" strokeWidth={0.5} />
    <Line points={[axePointsThree[0], axePointsThree[1], axePointsThree[2], axePointsThree[3]]} stroke="#0091EA" strokeWidth={0.5} />
  </Layer>
);

Axes.propTypes = {
  axePointsOne: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axePointsTwo: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axePointsThree: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Axes;

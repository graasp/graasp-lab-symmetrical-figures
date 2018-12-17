import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const Axes = ({
  axisPointsOne,
  axisPointsTwo,
  axisPointsThree,
  stroke,
  strokeWidth,
}) => (
  <Layer>
    <Line
      points={
        [
          axisPointsOne[0],
          axisPointsOne[1],
          axisPointsOne[2],
          axisPointsOne[3],
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          axisPointsTwo[0],
          axisPointsTwo[1],
          axisPointsTwo[2],
          axisPointsTwo[3],
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          axisPointsThree[0],
          axisPointsThree[1],
          axisPointsThree[2],
          axisPointsThree[3],
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

Axes.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  axisPointsOne: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axisPointsTwo: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axisPointsThree: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Axes;

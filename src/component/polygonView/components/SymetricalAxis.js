import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
} from 'react-konva';
// this component handle and manage all our symnetrical axes
// for our square view. It draws all the lines using the identic paths
const SymetricalAxis = ({
  color,
  circlePointsY,
  circlePointsY2,
  middleLinePoint,
  shadowBlur,
  radius,
  redStroke,
  strokeWidth,
}) => (
  <Layer>
    <Circle
      x={500}
      y={circlePointsY}
      radius={radius}
      fill={color}
      stroke={redStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Circle
      x={500}
      y={circlePointsY2}
      radius={radius}
      fill={color}
      stroke={redStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Line
      points={
        [
          middleLinePoint[0],
          middleLinePoint[1],
          middleLinePoint[2],
          middleLinePoint[3],
        ]
      }
      stroke={redStroke}
      strokeWidth={3}
    />
  </Layer>
);

SymetricalAxis.propTypes = {
  circlePointsY: PropTypes.number.isRequired,
  circlePointsY2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  redStroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  middleLinePoint: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default SymetricalAxis;

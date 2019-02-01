import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
  Text,
} from 'react-konva';
// this component handle and manage all our symnetrical axes
// for our square view. It draws all the lines using the identic paths
const SymetricalAxis = ({
  blackStroke,
  color,
  circlePointsY,
  circlePointsY2,
  fontSize,
  SYM_AXIS_0,
  SYM_AXIS_1,
  SYM_AXIS_2,
  middleLinePoint,
  shadowBlur,
  radius,
  redStroke,
  strokeWidth,
}) => (
  <Layer>
    <Circle
      x={SYM_AXIS_1}
      y={circlePointsY}
      radius={radius}
      fill={color}
      stroke={redStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Circle
      x={SYM_AXIS_1}
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
    <Text
      x={SYM_AXIS_0}
      y={SYM_AXIS_2}
      text="Axe de Symetrie"
      fontSize={fontSize}
      fill={blackStroke}
    />
  </Layer>
);

SymetricalAxis.propTypes = {
  circlePointsY: PropTypes.number.isRequired,
  circlePointsY2: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  SYM_AXIS_0: PropTypes.number.isRequired,
  SYM_AXIS_1: PropTypes.number.isRequired,
  SYM_AXIS_2: PropTypes.number.isRequired,
  redStroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  middleLinePoint: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default SymetricalAxis;

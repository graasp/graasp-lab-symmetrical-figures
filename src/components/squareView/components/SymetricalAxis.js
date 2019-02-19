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
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  stroke,
  lineStrokeWidth,
  middleLinePoint,
  shadowBlur,
  radius,
  strokeWidth,
}) => (
  <Layer>
    <Circle
      x={circlePointsX}
      y={circlePointsY}
      radius={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Circle
      x={circlePointsX}
      y={circlePointsY2}
      radius={radius}
      fill={color}
      stroke={stroke}
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
      stroke={blackStroke}
      strokeWidth={lineStrokeWidth}
    />
    <Text
      x={circlePointsX + 40}
      y={circlePointsY2 - 20}
      text="(M) Axe de Symetrie"
      fontSize={20}
      fill={blackStroke}
    />
  </Layer>
);

SymetricalAxis.propTypes = {
  circlePointsX: PropTypes.number.isRequired,
  circlePointsY: PropTypes.number.isRequired,
  circlePointsY2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  stroke: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineStrokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  middleLinePoint: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default SymetricalAxis;

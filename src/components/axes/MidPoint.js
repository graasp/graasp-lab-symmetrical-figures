import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Text,
} from 'react-konva';

const MidPoint = ({
  color,
  circlePoints,
  stroke,
  strokeWidth,
  shadowBlur,
  radius,
}) => (
  <Layer>
    <Circle
      x={circlePoints[0]}
      y={circlePoints[1]}
      radius={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Text
      x={circlePoints[0] + 20}
      y={circlePoints[1] - 50}
      text="(M) Point de symétrie"
      fontSize={20}
      fill={color}
    />
  </Layer>
);

MidPoint.propTypes = {
  circlePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  color: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};

export default MidPoint;

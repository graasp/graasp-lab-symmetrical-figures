import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
} from 'react-konva';

const MidPoint = ({
  color,
  circlePoints,
}) => (
  <Layer>
    <Circle
      x={circlePoints[0]}
      y={circlePoints[1]}
      radius={5}
      fill={color}
      stroke="red"
      strokeWidth={5}
      shadowBlur={5}
    />
  </Layer>
);

MidPoint.propTypes = {
  circlePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  color: PropTypes.string.isRequired,
};

export default MidPoint;

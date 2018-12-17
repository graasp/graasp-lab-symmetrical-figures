import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
  Text,
} from 'react-konva';

const Liner = ({
  color,
  handleDragMove,
  linePoints,
  lineAxeOne,
  lineAxeTwo,
  lineAxeThree,
  shadowBlur,
  lineStroke,
  radius,
  strokeWidth,
}) => (
  <Layer>
    <Line
      points={
        [
          linePoints[0],
          linePoints[1],
          linePoints[2],
          linePoints[3],
        ]
      }
      stroke="#ced4da"
      strokeWidth={5}
    />
    <Line
      points={
        [
          lineAxeOne[0],
          lineAxeOne[1],
          lineAxeOne[2],
          lineAxeOne[3],
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    />
    <Line
      points={
        [
          lineAxeTwo[0],
          lineAxeTwo[1],
          lineAxeTwo[2],
          lineAxeTwo[3],
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    />
    <Line
      points={
        [
          lineAxeThree[0],
          lineAxeThree[1],
          lineAxeThree[2],
          lineAxeThree[3],
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    />
    <Circle
      x={linePoints[0]}
      y={linePoints[1]}
      radius={radius}
      fill={color}
      stroke={lineStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
      onDragMove={handleDragMove}
      draggable
    />
    <Circle
      x={linePoints[2]}
      y={linePoints[3]}
      radius={radius}
      fill={color}
      stroke={lineStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Text
      x={linePoints[0] + 10}
      y={linePoints[1] + 10}
      text="Axe de Symetrie"
      fontSize={30}
      fill={color}
    />
  </Layer>
);

Liner.propTypes = {
  strokeWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  lineStroke: PropTypes.string.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  handleDragMove: PropTypes.func.isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeOne: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeTwo: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeThree: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Liner;

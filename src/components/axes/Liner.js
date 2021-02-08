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
  shadowBlur,
  lineStroke,
  radius,
  strokeWidth,
  // triangleA,
  // triangleB,
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
    {/* <Line
      points={
        [
          triangleA[0].x,
          triangleA[0].y,
          triangleB[0].x,
          triangleB[0].y,
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    />
    <Line
      points={
        [
          triangleA[1].x,
          triangleA[1].y,
          triangleB[1].x,
          triangleB[1].y,
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    />
    <Line
      points={
        [
          triangleA[2].x,
          triangleA[2].y,
          triangleB[2].x,
          triangleB[2].y,
        ]
      }
      stroke={lineStroke}
      strokeWidth={1}
    /> */}
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
      text="(D) Axe de Symetrie"
      fontSize={20}
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
  // triangleA: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  // triangleB: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Liner;

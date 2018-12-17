import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
} from 'react-konva';

const MidLine = ({
  blackStroke,
  color,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  IDENTIC_PATH_2,
  IDENTIC_PATH_3,
  IDENTIC_PATH_4,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  stroke,
  lineStrokeWidth,
  middleLinePoint,
  middleLinePointLineStroke,
  midPointStroke,
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
    <Line
      points={
        [
          IDENTIC_PATH_3,
          IDENTIC_PATH_3,
          IDENTIC_PATH_5,
          IDENTIC_PATH_3,
        ]
      }
      stroke={midPointStroke}
      strokeWidth={3}
    />
    <Line
      points={
        [
          IDENTIC_PATH_3,
          IDENTIC_PATH_4,
          IDENTIC_PATH_5,
          IDENTIC_PATH_4,
        ]
      }
      stroke={midPointStroke}
      strokeWidth={3}
    />
    <Line
      points={
        [
          IDENTIC_PATH_2,
          IDENTIC_PATH_4,
          IDENTIC_PATH_6,
          IDENTIC_PATH_4,
        ]
      }
      stroke={middleLinePointLineStroke}
      strokeWidth={9}
    />
    <Line
      points={
        [
          IDENTIC_PATH_2,
          IDENTIC_PATH_3,
          IDENTIC_PATH_6,
          IDENTIC_PATH_3,
        ]
      }
      stroke={middleLinePointLineStroke}
      strokeWidth={9}
    />
  </Layer>
);

MidLine.propTypes = {
  circlePointsX: PropTypes.number.isRequired,
  circlePointsY: PropTypes.number.isRequired,
  circlePointsY2: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  IDENTIC_PATH_2: PropTypes.number.isRequired,
  IDENTIC_PATH_3: PropTypes.number.isRequired,
  IDENTIC_PATH_4: PropTypes.number.isRequired,
  IDENTIC_PATH_5: PropTypes.number.isRequired,
  IDENTIC_PATH_6: PropTypes.number.isRequired,
  midPointStroke: PropTypes.string.isRequired,
  stroke: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  lineStrokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  middleLinePoint: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  middleLinePointLineStroke: PropTypes.string.isRequired,
};

export default MidLine;

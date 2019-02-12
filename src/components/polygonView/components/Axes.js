import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
  Text,
} from 'react-konva';

const Axes = ({
  CIRCLE_RADIUS,
  POLY_PATH_0,
  POLY_PATH_1,
  POLY_PATH_6,
  POLY_PATH_7,
  POLY_PATH_8,
  POLY_PATH_9,
  POLY_PATH_10,
  POLY_PATH_12,
  POLY_PATH_13,
  POLY_PATH_14,
  POLY_PATH_15,
  POLY_PATH_16,
  POLY_PATH_17,
  POLY_PATH_19,
  POLY_PATH_20,
  POLY_PATH_21,
  POLY_PATH_22,
  POLY_PATH_23,
  POLY_PATH_24,
  POLY_PATH_25,
  POLY_PATH_26,
  POLY_PATH_27,
  blackStroke,
  blueStroke,
  redStroke,
  strokeWidth,
  shadowBlur,
}) => (
  <Layer>
    <Circle
      x={POLY_PATH_0}
      y={300}
      radius={CIRCLE_RADIUS}
      fill={blackStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Text
      x={POLY_PATH_1}
      y={320}
      text="(K)"
      fontSize={30}
      fill="blue"
    />
    <Line
      points={
        [
          POLY_PATH_19,
          POLY_PATH_6,
          POLY_PATH_12,
          POLY_PATH_13,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLY_PATH_20,
          POLY_PATH_7,
          POLY_PATH_27,
          POLY_PATH_14,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLY_PATH_21,
          POLY_PATH_9,
          POLY_PATH_26,
          POLY_PATH_15,
        ]
      }
      stroke={redStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLY_PATH_22,
          POLY_PATH_8,
          POLY_PATH_25,
          POLY_PATH_16,
        ]
      }
      stroke={redStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLY_PATH_23,
          POLY_PATH_10,
          POLY_PATH_24,
          POLY_PATH_17,
        ]
      }
      stroke="green"
      strokeWidth={strokeWidth}
    />
  </Layer>
);

Axes.propTypes = {
  CIRCLE_RADIUS: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  blueStroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  POLY_PATH_0: PropTypes.number.isRequired,
  POLY_PATH_1: PropTypes.number.isRequired,
  POLY_PATH_6: PropTypes.number.isRequired,
  POLY_PATH_7: PropTypes.number.isRequired,
  POLY_PATH_8: PropTypes.number.isRequired,
  POLY_PATH_9: PropTypes.number.isRequired,
  POLY_PATH_10: PropTypes.number.isRequired,
  POLY_PATH_12: PropTypes.number.isRequired,
  POLY_PATH_13: PropTypes.number.isRequired,
  POLY_PATH_14: PropTypes.number.isRequired,
  POLY_PATH_15: PropTypes.number.isRequired,
  POLY_PATH_16: PropTypes.number.isRequired,
  POLY_PATH_17: PropTypes.number.isRequired,
  POLY_PATH_19: PropTypes.number.isRequired,
  POLY_PATH_20: PropTypes.number.isRequired,
  POLY_PATH_21: PropTypes.number.isRequired,
  POLY_PATH_22: PropTypes.number.isRequired,
  POLY_PATH_23: PropTypes.number.isRequired,
  POLY_PATH_24: PropTypes.number.isRequired,
  POLY_PATH_25: PropTypes.number.isRequired,
  POLY_PATH_26: PropTypes.number.isRequired,
  POLY_PATH_27: PropTypes.number.isRequired,
  redStroke: PropTypes.string.isRequired,
  shadowBlur: PropTypes.number.isRequired,
};

export default Axes;

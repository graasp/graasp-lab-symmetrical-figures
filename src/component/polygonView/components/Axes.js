import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
} from 'react-konva';

const Axes = ({
  CIRCLE_RADIUS,
  POLYGON_PATH_0,
  POLYGON_PATH_1,
  POLYGON_PATH_2,
  POLYGON_PATH_3,
  POLYGON_PATH_4,
  POLYGON_PATH_5,
  POLYGON_PATH_6,
  POLYGON_PATH_7,
  blackStroke,
  blueStroke,
  redStroke,
  strokeWidth,
  shadowBlur,
}) => (
  <Layer>
    <Circle
      x={POLYGON_PATH_4}
      y={POLYGON_PATH_3}
      radius={CIRCLE_RADIUS}
      fill={blackStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Line
      points={
        [
          POLYGON_PATH_1,
          POLYGON_PATH_1,
          POLYGON_PATH_6,
          POLYGON_PATH_5,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLYGON_PATH_7,
          POLYGON_PATH_1,
          POLYGON_PATH_2,
          POLYGON_PATH_5,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          POLYGON_PATH_4,
          POLYGON_PATH_0,
          POLYGON_PATH_4,
          POLYGON_PATH_5,
        ]
      }
      stroke={redStroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

Axes.propTypes = {
  CIRCLE_RADIUS: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  blueStroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  POLYGON_PATH_0: PropTypes.number.isRequired,
  POLYGON_PATH_1: PropTypes.number.isRequired,
  POLYGON_PATH_2: PropTypes.number.isRequired,
  POLYGON_PATH_3: PropTypes.number.isRequired,
  POLYGON_PATH_4: PropTypes.number.isRequired,
  POLYGON_PATH_5: PropTypes.number.isRequired,
  POLYGON_PATH_6: PropTypes.number.isRequired,
  POLYGON_PATH_7: PropTypes.number.isRequired,
  redStroke: PropTypes.string.isRequired,
  shadowBlur: PropTypes.number.isRequired,
};

export default Axes;

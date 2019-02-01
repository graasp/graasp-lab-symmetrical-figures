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
  CIRCLE_X,
  CIRCLE_Y,
  IDENTIC_PATH_2,
  IDENTIC_PATH_3,
  IDENTIC_PATH_4,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  blackStroke,
  blueStroke,
  strokeWidth,
  shadowBlur,
}) => (
  <Layer>
    <Text
      x={CIRCLE_X - 20}
      y={CIRCLE_Y + 20}
      text="(N)"
      fontSize={30}
      fill={blueStroke}
    />
    <Circle
      x={CIRCLE_X}
      y={CIRCLE_Y}
      radius={CIRCLE_RADIUS}
      fill={blackStroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Line
      points={
        [
          IDENTIC_PATH_3,
          IDENTIC_PATH_3,
          IDENTIC_PATH_5,
          IDENTIC_PATH_4,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          IDENTIC_PATH_5,
          IDENTIC_PATH_3,
          IDENTIC_PATH_3,
          IDENTIC_PATH_4,
        ]
      }
      stroke={blueStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          IDENTIC_PATH_2,
          IDENTIC_PATH_3,
          IDENTIC_PATH_6,
          IDENTIC_PATH_4,
        ]
      }
      stroke={blackStroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          IDENTIC_PATH_2,
          IDENTIC_PATH_4,
          IDENTIC_PATH_6,
          IDENTIC_PATH_3,
        ]
      }
      stroke={blackStroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

Axes.propTypes = {
  CIRCLE_RADIUS: PropTypes.number.isRequired,
  CIRCLE_X: PropTypes.number.isRequired,
  CIRCLE_Y: PropTypes.number.isRequired,
  blackStroke: PropTypes.string.isRequired,
  blueStroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  IDENTIC_PATH_2: PropTypes.number.isRequired,
  IDENTIC_PATH_3: PropTypes.number.isRequired,
  IDENTIC_PATH_4: PropTypes.number.isRequired,
  IDENTIC_PATH_5: PropTypes.number.isRequired,
  IDENTIC_PATH_6: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
};

export default Axes;

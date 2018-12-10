import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Shape,
} from 'react-konva';

const Triangle = ({
  color,
  points,
  stroke,
  strokeWidth,
  shadowBlur,
  opacity,
  shapeStroke,
  radius,
}) => (
  <Layer>
    <Shape
    // the sceneFunc allow us to draw our triangle
    // specifyng coordinates of all points it should pass by
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        context.lineTo(points[1].x, points[1].y);
        context.lineTo(points[2].x, points[2].y);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      stroke={shapeStroke}
      strokeWidth={strokeWidth}
      opacity={opacity}
    />
    <Circle
      x={points[0].x}
      y={points[0].y}
      radius={5}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Circle
      x={points[1].x}
      y={points[1].y}
      radius={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
    <Circle
      x={points[2].x}
      y={points[2].y}
      radius={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
    />
  </Layer>
);

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  shapeStroke: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Triangle;

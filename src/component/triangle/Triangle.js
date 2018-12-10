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
}) => (
  <Layer>
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        context.lineTo(points[1].x, points[1].y);
        context.lineTo(points[2].x, points[2].y);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      stroke="#000"
      strokeWidth={3}
      opacity={0.5}
    />
    <Circle
      x={points[0].x}
      y={points[0].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
    />
    <Circle
      x={points[1].x}
      y={points[1].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
    />
    <Circle
      x={points[2].x}
      y={points[2].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
    />
  </Layer>
);

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Triangle;

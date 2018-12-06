import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Shape,
  Text,
} from 'react-konva';

const Triangle = ({
  color,
  node,
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
    <Text
      x={points[0].x - 10}
      y={points[0].y - 40}
      text={node.A}
      fontSize={30}
      fill={color}
    />
    <Text
      x={points[1].x + 20}
      y={points[1].y - 30}
      text={node.B}
      fontSize={30}
      fill={color}
    />
    <Text
      x={points[2].x - 30}
      y={points[2].y + 10}
      text={node.C}
      fontSize={30}
      fill={color}
    />
  </Layer>
);

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  node: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
  }).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Triangle;

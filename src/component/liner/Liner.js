import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Line,
} from 'react-konva';

const Liner = ({
  color,
  handleDragMove,
  linePoints,
}) => (
  <Layer>
    <Line points={[linePoints[0], linePoints[1], linePoints[2], linePoints[3]]} stroke="#ced4da" strokeWidth={5} />
    <Circle
      x={linePoints[0]}
      y={linePoints[1]}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
      onDragMove={handleDragMove}
      draggable
    />
    <Circle
      x={linePoints[2]}
      y={linePoints[3]}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
    />
  </Layer>
);

Liner.propTypes = {
  color: PropTypes.string.isRequired,
  handleDragMove: PropTypes.func.isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Liner;

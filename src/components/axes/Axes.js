import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const Axes = ({
  stroke,
  strokeWidth,
  triangleA,
  triangleB,
}) => (
  <Layer>
    <Line
      points={
        [
          triangleA[0].x,
          triangleA[0].y,
          triangleB[0].x,
          triangleB[0].y,
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          triangleA[1].x,
          triangleA[1].y,
          triangleB[2].x,
          triangleB[2].y,
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={
        [
          triangleA[2].x,
          triangleA[2].y,
          triangleB[1].x,
          triangleB[1].y,
        ]
      }
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

Axes.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  triangleA: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
  triangleB: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Axes;

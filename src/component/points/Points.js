import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Text,
} from 'react-konva';

const Points = ({
  color,
  node,
  points,
}) => (
  <Layer>
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

Points.propTypes = {
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

export default Points;

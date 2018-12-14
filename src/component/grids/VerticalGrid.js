import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const VerticalGrid = ({
  stroke,
  strokeWidth,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
}) => (
  <Layer>
    <Line
      points={[IDENTIC_PATH_0, IDENTIC_PATH_0, 0, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[25, IDENTIC_PATH_0, 25, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[50, IDENTIC_PATH_0, 50, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[75, IDENTIC_PATH_0, 75, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[100, IDENTIC_PATH_0, 100, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[125, IDENTIC_PATH_0, 125, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[150, IDENTIC_PATH_0, 150, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[175, IDENTIC_PATH_0, 175, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[200, IDENTIC_PATH_0, 200, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[225, IDENTIC_PATH_0, 225, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[250, IDENTIC_PATH_0, 250, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[275, IDENTIC_PATH_0, 275, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[300, IDENTIC_PATH_0, 300, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[325, IDENTIC_PATH_0, 325, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[350, IDENTIC_PATH_0, 350, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[375, IDENTIC_PATH_0, 375, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[400, IDENTIC_PATH_0, 400, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[425, IDENTIC_PATH_0, 425, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[450, IDENTIC_PATH_0, 450, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[475, IDENTIC_PATH_0, 475, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[500, IDENTIC_PATH_0, 500, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[525, IDENTIC_PATH_0, 525, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[550, IDENTIC_PATH_0, 550, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[575, IDENTIC_PATH_0, 575, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[600, IDENTIC_PATH_0, 600, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[625, IDENTIC_PATH_0, 625, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[650, IDENTIC_PATH_0, 650, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[675, IDENTIC_PATH_0, 675, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[700, IDENTIC_PATH_0, 700, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[725, IDENTIC_PATH_0, 725, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[750, IDENTIC_PATH_0, 750, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[775, IDENTIC_PATH_0, 775, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[800, IDENTIC_PATH_0, 800, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[825, IDENTIC_PATH_0, 825, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[850, IDENTIC_PATH_0, 850, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[875, IDENTIC_PATH_0, 875, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[900, IDENTIC_PATH_0, 900, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[925, IDENTIC_PATH_0, 925, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[950, IDENTIC_PATH_0, 950, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[975, IDENTIC_PATH_0, 975, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

VerticalGrid.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  IDENTIC_PATH_0: PropTypes.number.isRequired,
  IDENTIC_PATH_1: PropTypes.number.isRequired,
};

export default VerticalGrid;

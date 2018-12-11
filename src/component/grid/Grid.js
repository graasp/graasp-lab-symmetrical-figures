import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const Grid = ({ stroke, strokeWidth }) => (
  <Layer>
    <Line points={[10, 25, 1000, 25]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 50, 1000, 50]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 75, 1000, 75]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 100, 1000, 100]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 125, 1000, 125]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 150, 1000, 150]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 175, 1000, 175]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 200, 1000, 200]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 225, 1000, 225]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 250, 1000, 250]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 275, 1000, 275]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 300, 1000, 300]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 325, 1000, 325]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 350, 1000, 350]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 375, 1000, 375]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 400, 1000, 400]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 425, 1000, 425]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 450, 1000, 450]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 475, 1000, 475]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 500, 1000, 500]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 525, 1000, 525]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 550, 1000, 550]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 575, 1000, 575]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 600, 1000, 600]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 625, 1000, 625]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 650, 1000, 650]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 675, 1000, 675]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 700, 1000, 700]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[10, 725, 1000, 725]} stroke={stroke} strokeWidth={strokeWidth} />

    <Line points={[10, 10, 0, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[25, 10, 25, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[50, 10, 50, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[75, 10, 75, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[100, 10, 100, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[125, 10, 125, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[150, 10, 150, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[175, 10, 175, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[200, 10, 200, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[225, 10, 225, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[250, 10, 250, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[275, 10, 275, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[300, 10, 300, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[325, 10, 325, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[350, 10, 350, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[375, 10, 375, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[400, 10, 400, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[425, 10, 425, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[450, 10, 450, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[475, 10, 475, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[500, 10, 500, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[525, 10, 525, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[550, 10, 550, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[575, 10, 575, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[600, 10, 600, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[625, 10, 625, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[650, 10, 650, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[675, 10, 675, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[700, 10, 700, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[725, 10, 725, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[750, 10, 750, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[775, 10, 775, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[800, 10, 800, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[825, 10, 825, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[850, 10, 850, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[875, 10, 875, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[900, 10, 900, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[925, 10, 925, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[950, 10, 950, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
    <Line points={[975, 10, 975, 1000]} stroke={stroke} strokeWidth={strokeWidth} />
  </Layer>
);

Grid.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Grid;

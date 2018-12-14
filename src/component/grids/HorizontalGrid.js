import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
} from 'react-konva';

const HorizintalGrid = ({
  stroke,
  strokeWidth,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
}) => (
  <Layer>
    <Line
      points={[IDENTIC_PATH_0, 25, IDENTIC_PATH_1, 25]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 50, IDENTIC_PATH_1, 50]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 75, IDENTIC_PATH_1, 75]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 100, IDENTIC_PATH_1, 100]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 125, IDENTIC_PATH_1, 125]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 150, IDENTIC_PATH_1, 150]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 175, IDENTIC_PATH_1, 175]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 200, IDENTIC_PATH_1, 200]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 225, IDENTIC_PATH_1, 225]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 250, IDENTIC_PATH_1, 250]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 275, IDENTIC_PATH_1, 275]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 300, IDENTIC_PATH_1, 300]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 325, IDENTIC_PATH_1, 325]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 350, IDENTIC_PATH_1, 350]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 375, IDENTIC_PATH_1, 375]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 400, IDENTIC_PATH_1, 400]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 425, IDENTIC_PATH_1, 425]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 450, IDENTIC_PATH_1, 450]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 475, IDENTIC_PATH_1, 475]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 500, IDENTIC_PATH_1, 500]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 525, IDENTIC_PATH_1, 525]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 550, IDENTIC_PATH_1, 550]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 575, IDENTIC_PATH_1, 575]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 600, IDENTIC_PATH_1, 600]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 625, IDENTIC_PATH_1, 625]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 650, IDENTIC_PATH_1, 650]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 675, IDENTIC_PATH_1, 675]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 700, IDENTIC_PATH_1, 700]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 725, IDENTIC_PATH_1, 725]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Layer>
);

HorizintalGrid.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  IDENTIC_PATH_0: PropTypes.number.isRequired,
  IDENTIC_PATH_1: PropTypes.number.isRequired,
};

export default HorizintalGrid;

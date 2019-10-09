import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
  Text,
} from 'react-konva';

const HorizintalGrid = ({
  blackStroke,
  defaultSize,
  stroke,
  strokeWidth,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
}) => (
  <Layer>
    <Line
      points={[IDENTIC_PATH_0, 50, IDENTIC_PATH_1, 50]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 100, IDENTIC_PATH_1, 100]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 150, IDENTIC_PATH_1, 150]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 200, IDENTIC_PATH_1, 200]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 250, IDENTIC_PATH_1, 250]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 300, IDENTIC_PATH_1, 300]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 350, IDENTIC_PATH_1, 350]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 400, IDENTIC_PATH_1, 400]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 450, IDENTIC_PATH_1, 450]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 500, IDENTIC_PATH_1, 500]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 550, IDENTIC_PATH_1, 550]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 600, IDENTIC_PATH_1, 600]}
      stroke={2}
      strokeWidth={strokeWidth}
    />

    <Text
      x={70}
      y={535}
      text={1}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={485}
      text={2}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={435}
      text={3}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={385}
      text={4}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={335}
      text={5}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={285}
      text={6}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={235}
      text={7}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={185}
      text={8}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={135}
      text={9}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={85}
      text={10}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={35}
      text={11}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={70}
      y={0}
      text="Y"
      fontSize={30}
      fill={blackStroke}
    />
  </Layer>
);

HorizintalGrid.propTypes = {
  blackStroke: PropTypes.string.isRequired,
  defaultSize: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  IDENTIC_PATH_0: PropTypes.number.isRequired,
  IDENTIC_PATH_1: PropTypes.number.isRequired,
};

export default HorizintalGrid;

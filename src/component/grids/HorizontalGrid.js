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
  IDENTIC_PATH_6,
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
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 650, IDENTIC_PATH_1, 650]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 700, IDENTIC_PATH_1, 700]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 750, IDENTIC_PATH_1, 750]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 800, IDENTIC_PATH_1, 800]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 850, IDENTIC_PATH_1, 850]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_0, 900, IDENTIC_PATH_1, 900]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 + 25}
      text={1}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 25}
      text={2}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 75}
      text={3}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 125}
      text={4}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 175}
      text={5}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 225}
      text={6}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 275}
      text={7}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 325}
      text={8}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 375}
      text={9}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 425}
      text={10}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 475}
      text={11}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 525}
      text={12}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 575}
      text={13}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 625}
      text={14}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 675}
      text={15}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 725}
      text={16}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={20}
      y={IDENTIC_PATH_6 - 775}
      text="(Y)"
      fontSize={40}
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
  IDENTIC_PATH_6: PropTypes.number.isRequired,
};

export default HorizintalGrid;

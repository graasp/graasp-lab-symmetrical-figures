import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
  Text,
} from 'react-konva';

const VerticalGrid = ({
  blackStroke,
  defaultSize,
  stroke,
  strokeWidth,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
  IDENTIC_PATH_7,
}) => (
  <Layer>
    <Line
      points={[IDENTIC_PATH_0, IDENTIC_PATH_0, 0, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[50, IDENTIC_PATH_0, 50, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[100, IDENTIC_PATH_0, 100, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[150, IDENTIC_PATH_0, 150, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[200, IDENTIC_PATH_0, 200, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[250, IDENTIC_PATH_0, 250, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[300, IDENTIC_PATH_0, 300, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[350, IDENTIC_PATH_0, 350, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[400, IDENTIC_PATH_0, 400, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[450, IDENTIC_PATH_0, 450, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[500, IDENTIC_PATH_0, 500, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[550, IDENTIC_PATH_0, 550, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[600, IDENTIC_PATH_0, 600, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[650, IDENTIC_PATH_0, 650, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[700, IDENTIC_PATH_0, 700, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[750, IDENTIC_PATH_0, 750, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[800, IDENTIC_PATH_0, 800, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[850, IDENTIC_PATH_0, 850, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[900, IDENTIC_PATH_0, 900, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[IDENTIC_PATH_7, IDENTIC_PATH_0, IDENTIC_PATH_7, IDENTIC_PATH_1]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text
      x={40}
      y={IDENTIC_PATH_7 + 5}
      text={1}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={90}
      y={IDENTIC_PATH_7 + 5}
      text={2}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={140}
      y={IDENTIC_PATH_7 + 5}
      text={3}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={190}
      y={IDENTIC_PATH_7 + 5}
      text={4}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={240}
      y={IDENTIC_PATH_7 + 5}
      text={5}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={290}
      y={IDENTIC_PATH_7 + 5}
      text={6}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={340}
      y={IDENTIC_PATH_7 + 5}
      text={7}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={390}
      y={IDENTIC_PATH_7 + 5}
      text={8}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={440}
      y={IDENTIC_PATH_7 + 5}
      text={9}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={490}
      y={IDENTIC_PATH_7 + 5}
      text={10}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={540}
      y={IDENTIC_PATH_7 + 5}
      text={11}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={590}
      y={IDENTIC_PATH_7 + 5}
      text={12}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={640}
      y={IDENTIC_PATH_7 + 5}
      text={13}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={690}
      y={IDENTIC_PATH_7 + 5}
      text={14}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={740}
      y={IDENTIC_PATH_7 + 5}
      text={15}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={790}
      y={IDENTIC_PATH_7 + 5}
      text="(X)"
      fontSize={40}
      fill={blackStroke}
    />
  </Layer>
);

VerticalGrid.propTypes = {
  blackStroke: PropTypes.string.isRequired,
  defaultSize: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  IDENTIC_PATH_0: PropTypes.number.isRequired,
  IDENTIC_PATH_1: PropTypes.number.isRequired,
  IDENTIC_PATH_7: PropTypes.number.isRequired,
};

export default VerticalGrid;

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
  VERTICAL_IDENTIC_PATH_0,
  IDENTIC_PATH_5,
}) => (
  <Layer>
    <Line
      points={[100, VERTICAL_IDENTIC_PATH_0, 100, IDENTIC_PATH_5]}
      stroke={10}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[150, VERTICAL_IDENTIC_PATH_0, 150, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[200, VERTICAL_IDENTIC_PATH_0, 200, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[250, VERTICAL_IDENTIC_PATH_0, 250, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[300, VERTICAL_IDENTIC_PATH_0, 300, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[350, VERTICAL_IDENTIC_PATH_0, 350, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[400, VERTICAL_IDENTIC_PATH_0, 400, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[450, VERTICAL_IDENTIC_PATH_0, 450, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[500, VERTICAL_IDENTIC_PATH_0, 500, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[550, VERTICAL_IDENTIC_PATH_0, 550, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[600, VERTICAL_IDENTIC_PATH_0, 600, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[650, VERTICAL_IDENTIC_PATH_0, 650, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[700, VERTICAL_IDENTIC_PATH_0, 700, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[750, VERTICAL_IDENTIC_PATH_0, 750, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[800, VERTICAL_IDENTIC_PATH_0, 800, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[850, VERTICAL_IDENTIC_PATH_0, 850, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      points={[850, VERTICAL_IDENTIC_PATH_0, 850, IDENTIC_PATH_5]}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />

    <Text
      x={140}
      y={630}
      text={1}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={190}
      y={630}
      text={2}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={240}
      y={630}
      text={3}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={290}
      y={630}
      text={4}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={340}
      y={630}
      text={5}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={390}
      y={630}
      text={6}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={440}
      y={630}
      text={7}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={490}
      y={630}
      text={8}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={540}
      y={630}
      text={9}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={590}
      y={630}
      text={10}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={640}
      y={630}
      text={11}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={690}
      y={630}
      text={12}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={740}
      y={630}
      text={13}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={790}
      y={630}
      text={14}
      fontSize={defaultSize}
      fill={blackStroke}
    />
    <Text
      x={840}
      y={630}
      text="X"
      fontSize={30}
      fill={blackStroke}
    />
  </Layer>
);

VerticalGrid.propTypes = {
  blackStroke: PropTypes.string.isRequired,
  defaultSize: PropTypes.number.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  VERTICAL_IDENTIC_PATH_0: PropTypes.number.isRequired,
  IDENTIC_PATH_5: PropTypes.number.isRequired,
};

export default VerticalGrid;

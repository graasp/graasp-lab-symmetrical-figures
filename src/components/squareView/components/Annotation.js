import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Text,
} from 'react-konva';
// this component takes in charge all related to the square
// names witch are: ABCD anf A'B'C'D'.
const Annotation = ({
  blackStroke,
  IDENTIC_PATH_2,
  IDENTIC_PATH_3,
  IDENTIC_PATH_4,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  fontSize,
  squareNodeA,
  squareNodeB,
}) => (
  <Layer>
    <Text
      x={IDENTIC_PATH_2 - 10}
      y={IDENTIC_PATH_3 - 40}
      text={squareNodeA.A}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_2 - 10}
      y={IDENTIC_PATH_4 + 20}
      text={squareNodeA.B}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_3 - 10}
      y={IDENTIC_PATH_4 + 20}
      text={squareNodeA.C}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_3 - 10}
      y={IDENTIC_PATH_3 - 40}
      text={squareNodeA.D}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_5 - 10}
      y={IDENTIC_PATH_3 - 40}
      text={squareNodeB.A}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_5 - 10}
      y={IDENTIC_PATH_4 + 20}
      text={squareNodeB.B}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_6 - 10}
      y={IDENTIC_PATH_4 + 20}
      text={squareNodeB.C}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_6 - 10}
      y={IDENTIC_PATH_3 - 40}
      text={squareNodeB.D}
      fontSize={fontSize}
      fill={blackStroke}
    />
  </Layer>
);

Annotation.propTypes = {
  blackStroke: PropTypes.string.isRequired,
  IDENTIC_PATH_2: PropTypes.number.isRequired,
  IDENTIC_PATH_3: PropTypes.number.isRequired,
  IDENTIC_PATH_4: PropTypes.number.isRequired,
  IDENTIC_PATH_5: PropTypes.number.isRequired,
  IDENTIC_PATH_6: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  squareNodeA: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
  }).isRequired,
  squareNodeB: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
  }).isRequired,
};

export default Annotation;

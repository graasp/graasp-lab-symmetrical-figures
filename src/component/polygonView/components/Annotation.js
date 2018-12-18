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
  fontSize,
  polygonNode,
}) => (
  <Layer>
    <Text
      x={IDENTIC_PATH_4 - 10}
      y={IDENTIC_PATH_2 + 100}
      text={polygonNode.A}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={350}
      y={IDENTIC_PATH_4 + 20}
      text={polygonNode.D}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={620}
      y={IDENTIC_PATH_4 + 20}
      text={polygonNode.C}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_3 + 10}
      y={IDENTIC_PATH_3 + 30}
      text={polygonNode.E}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={IDENTIC_PATH_5 + 70}
      y={IDENTIC_PATH_3 + 30}
      text={polygonNode.B}
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
  fontSize: PropTypes.number.isRequired,
  polygonNode: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
    E: PropTypes.string.isRequired,
  }).isRequired,
};

export default Annotation;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Text,
} from 'react-konva';
// this component takes in charge all related to the left polygon
// names witch are: ABCD anf A'B'C'D'.
const PolyTwoAnnotation = ({
  blackStroke,
  TEXT_X_5,
  TEXT_X_6,
  TEXT_X_7,
  TEXT_X_8,
  TEXT_X_9,
  TEXT_Y_3,
  TEXT_Y_4,
  TEXT_Y_5,
  fontSize,
  polygonNode,
}) => (
  <Layer>
    <Text
      x={TEXT_X_5}
      y={TEXT_Y_3}
      text={polygonNode.Aprim}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={TEXT_X_6}
      y={TEXT_Y_4}
      text={polygonNode.Bprim}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={TEXT_X_7}
      y={TEXT_Y_5}
      text={polygonNode.Cprim}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={TEXT_X_8}
      y={TEXT_Y_5}
      text={polygonNode.Dprim}
      fontSize={fontSize}
      fill={blackStroke}
    />
    <Text
      x={TEXT_X_9}
      y={TEXT_Y_4}
      text={polygonNode.Eprim}
      fontSize={fontSize}
      fill={blackStroke}
    />
  </Layer>
);

PolyTwoAnnotation.propTypes = {
  blackStroke: PropTypes.string.isRequired,
  TEXT_X_5: PropTypes.number.isRequired,
  TEXT_X_6: PropTypes.number.isRequired,
  TEXT_X_7: PropTypes.number.isRequired,
  TEXT_X_8: PropTypes.number.isRequired,
  TEXT_X_9: PropTypes.number.isRequired,
  TEXT_Y_3: PropTypes.number.isRequired,
  TEXT_Y_4: PropTypes.number.isRequired,
  TEXT_Y_5: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  polygonNode: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
    E: PropTypes.string.isRequired,
  }).isRequired,
};

export default PolyTwoAnnotation;

import React from 'react';
import PropTypes from 'prop-types';
import { Layer } from 'react-konva';

const HorizintalGrid = ({
  renderHorizontalGrid,
}) => (
  <Layer>
    {renderHorizontalGrid}
  </Layer>
);

HorizintalGrid.propTypes = {
  renderHorizontalGrid: PropTypes.shape({}).isRequired,
};

export default HorizintalGrid;

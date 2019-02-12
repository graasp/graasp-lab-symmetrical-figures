import React from 'react';
import PropTypes from 'prop-types';
import { Layer } from 'react-konva';

const HorizontalGrid = ({
  renderHorizontalGrid,
}) => (
  <Layer>
    {renderHorizontalGrid}
  </Layer>
);

HorizontalGrid.propTypes = {
  renderHorizontalGrid: PropTypes.shape({}).isRequired,
};

export default HorizontalGrid;

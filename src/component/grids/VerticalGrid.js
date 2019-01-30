import React from 'react';
import PropTypes from 'prop-types';
import { Layer } from 'react-konva';

const VerticalGrid = ({
  renderVerticalGrid,
}) => (
  <Layer>
    {renderVerticalGrid}
  </Layer>
);

VerticalGrid.propTypes = {
  renderVerticalGrid: PropTypes.shape({}).isRequired,
};

export default VerticalGrid;

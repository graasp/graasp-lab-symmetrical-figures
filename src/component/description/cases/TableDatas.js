import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, Input,
} from 'reactstrap';

const TableDatas = ({
  handleDatas,
  point,
  axis,
}) => (
  <td>
    <InputGroup>
      <Input
        type="number"
        min="0"
        max="20"
        onChange={e => handleDatas(e)}
        data-axis={axis}
        data-point={point}
      />
    </InputGroup>
  </td>
);

TableDatas.propTypes = {
  axis: PropTypes.string.isRequired,
  handleDatas: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
};
export default TableDatas;

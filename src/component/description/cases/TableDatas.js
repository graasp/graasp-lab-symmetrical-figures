import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, Input,
} from 'reactstrap';

const TableDatas = ({ handleDatas }) => (
  <td>
    <InputGroup>
      <Input type="number" min="0" max="435" onChange={e => handleDatas(e)} />
    </InputGroup>
  </td>
);

TableDatas.propTypes = {
  handleDatas: PropTypes.func.isRequired,
};
export default TableDatas;

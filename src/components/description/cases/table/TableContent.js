import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'reactstrap';
import TableDatas from './TableDatas';

const TableContent = ({
  handleDatas,
  isPolygonActive,
  isSquareActive,
}) => (
  <div>
    <Table borderless>
      <thead>
        <tr>
          <th>
            &nbsp;
          </th>
          <th>
            &nbsp;
            X
          </th>
          <th>
            &nbsp;
            Y
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">A</th>
          <TableDatas point="A" axis="x" name="X" handleDatas={handleDatas} />
          <TableDatas point="A" axis="y" name="Y" handleDatas={handleDatas} />
        </tr>
        <tr>
          <th scope="row">B</th>
          <TableDatas point="B" axis="x" name="X" handleDatas={handleDatas} />
          <TableDatas point="B" axis="y" name="Y" handleDatas={handleDatas} />
        </tr>
        <tr>
          <th scope="row">C</th>
          <TableDatas point="C" axis="x" name="X" handleDatas={handleDatas} />
          <TableDatas point="C" axis="y" name="Y" handleDatas={handleDatas} />
        </tr>
        { isSquareActive || isPolygonActive ? (
          <tr>
            <th scope="row">D</th>
            <TableDatas point="D" axis="x" name="X" handleDatas={handleDatas} />
            <TableDatas point="D" axis="y" name="Y" handleDatas={handleDatas} />
          </tr>
        ) : (
          <tr />
        )
        }
        { isPolygonActive ? (
          <tr>
            <th scope="row">E</th>
            <TableDatas point="E" axis="x" name="X" handleDatas={handleDatas} />
            <TableDatas point="E" axis="y" name="Y" handleDatas={handleDatas} />
          </tr>
        ) : (
          <tr />
        )
        }
      </tbody>
    </Table>
  </div>
);

TableContent.propTypes = {
  handleDatas: PropTypes.func.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
};
export default TableContent;

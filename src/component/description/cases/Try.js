import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import TableDatas from './TableDatas';

const Try = ({
  isPolygonActive,
  isSquareActive,
}) => (
  <div className="testing-container">
    <h2>We are tryinh here hehe</h2>
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
          <TableDatas index="0" name="X" />
          <TableDatas index="1" name="Y" />
        </tr>
        <tr>
          <th scope="row">B</th>
          <TableDatas index="1" name="X" />
          <TableDatas index="2" name="Y" />
        </tr>
        <tr>
          <th scope="row">C</th>
          <TableDatas index="1" name="X" />
          <TableDatas index="2" name="Y" />
        </tr>
        { isSquareActive || isPolygonActive ? (
          <tr>
            <th scope="row">D</th>
            <TableDatas index="1" name="X" />
            <TableDatas index="2" name="Y" />
          </tr>
        ) : ''
        }
        { isPolygonActive ? (
          <tr>
            <th scope="row">E</th>
            <TableDatas index="1" name="X" />
            <TableDatas index="2" name="Y" />
          </tr>
        ) : ''
        }
      </tbody>
    </Table>
    <Button
      color="secondary"
    >
      Vérifier
    </Button>
  </div>
);

Try.propTypes = {
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
};
export default Try;

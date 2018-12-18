import React from 'react';
import { Button, Table } from 'reactstrap';
import TableDatas from './TableDatas';

const Try = () => (
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
          <TableDatas index="0" name="X" axis="x" />
          <TableDatas index="1" name="Y" axis="x" />
        </tr>
        <tr>
          <th scope="row">B</th>
          <TableDatas index="1" name="X" axis="y" />
          <TableDatas index="2" name="Y" axis="y" />
        </tr>
        <tr>
          <th scope="row">C</th>
          <TableDatas index="1" name="X" axis="y" />
          <TableDatas index="2" name="Y" axis="y" />
        </tr>
      </tbody>
    </Table>
    <Button
      color="secondary"
    >
      Vérifier
    </Button>
  </div>
);

export default Try;

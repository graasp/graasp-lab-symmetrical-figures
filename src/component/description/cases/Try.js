import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import TableDatas from './TableDatas';

const Try = ({
  handleDatas,
  isPolygonActive,
  isSquareActive,
}) => (
  <div className="testing-container">
    <p className="testing-message">
      Observe attentivement le schéma puis complète les cases vides par
      les coordonnées de chaque point
    </p>
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
          <TableDatas index="0" name="X" handleDatas={handleDatas} />
          <TableDatas index="1" name="Y" handleDatas={handleDatas} />
        </tr>
        <tr>
          <th scope="row">B</th>
          <TableDatas index="1" name="X" handleDatas={handleDatas} />
          <TableDatas index="2" name="Y" handleDatas={handleDatas} />
        </tr>
        <tr>
          <th scope="row">C</th>
          <TableDatas index="1" name="X" handleDatas={handleDatas} />
          <TableDatas index="2" name="Y" handleDatas={handleDatas} />
        </tr>
        { isSquareActive || isPolygonActive ? (
          <tr>
            <th scope="row">D</th>
            <TableDatas index="1" name="X" handleDatas={handleDatas} />
            <TableDatas index="2" name="Y" handleDatas={handleDatas} />
          </tr>
        ) : ''
        }
        { isPolygonActive ? (
          <tr>
            <th scope="row">E</th>
            <TableDatas index="1" name="X" handleDatas={handleDatas} />
            <TableDatas index="2" name="Y" handleDatas={handleDatas} />
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
  handleDatas: PropTypes.func.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
};
export default Try;

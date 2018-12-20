import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import TableDatas from './TableDatas';

const Try = ({
  handleDatas,
  handleVerify,
  isPolygonActive,
  isSquareActive,
}) => (
  <div className="testing-container">
    <p className="testing-message">
      <b>1-</b>
      &nbsp;
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
        ) : ''
        }
        { isPolygonActive ? (
          <tr>
            <th scope="row">E</th>
            <TableDatas point="E" axis="x" name="X" handleDatas={handleDatas} />
            <TableDatas point="E" axis="y" name="Y" handleDatas={handleDatas} />
          </tr>
        ) : ''
        }
      </tbody>
    </Table>
    <Button
      color="secondary"
      onClick={handleVerify}
    >
      Vérifier
    </Button>
  </div>
);

Try.propTypes = {
  handleDatas: PropTypes.func.isRequired,
  handleVerify: PropTypes.func.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
};
export default Try;

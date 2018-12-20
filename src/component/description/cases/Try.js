import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Table } from 'reactstrap';
import TableDatas from './TableDatas';
import './Try.css';

const Try = ({
  handleDatas,
  handleVerify,
  isPolygonActive,
  isSquareActive,
  toggleLine,
}) => (
  <div className="testing-container">
    <p className="testing-message">
      <b>1-</b>
      &nbsp;
      Observe attentivement le schéma puis
      &nbsp;
      <b>complète</b>
      &nbsp;
      les cases vides par
      les
      &nbsp;
      <b>coordonnées</b>
      &nbsp;
      de chaque point
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
    <p className="testing-message">
      <b>2-</b>
      &nbsp;
      Le point
      &nbsp;
      <b>C&apos; : ( 9;8 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      { toggleLine ? (
        <b>C</b>
      ) : (
        <b>B</b>
      )
      }
      &nbsp;
      par rapport &nbsp;
      { toggleLine ? (
        <b>au point M</b>
      ) : (
        <b>à la droite</b>
      )
      }
      .
    </p>
    <p>
      Complète donc les points de symétrie:
    </p>
    <p>
      <b>B&apos; : ( 7;6 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        <Input
          type="text"
          className="change-value"
        />
      </span>
    </p>
    <p>
      <b>A&apos; : ( 10;5 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        <Input
          type="text"
          className="change-value"
        />
      </span>
    </p>

    <p>
      Le triangle&nbsp;
      <b>ABC</b>
      &nbsp;et le triangle&nbsp;
      <b>A&apos;B&apos;C&apos;</b>
      &nbsp;sont&nbsp;
      <span className="check-symetric-word">
        <Input
          type="text"
          className="change-value"
        />
      </span>
      &nbsp;par rapport &nbsp;
      { toggleLine ? (
        <b>au point M</b>
      ) : (
        <b>à la droite</b>
      )
      }
      .
    </p>
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
  toggleLine: PropTypes.bool.isRequired,
};
export default Try;

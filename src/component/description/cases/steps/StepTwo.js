import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const Two = ({
  foundWord,
  handleSymetricWord,
  toggleLine,
  symOfAFound,
  symOfCFound,
}) => (
  <div>
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
        { symOfCFound ? (
          <b>C</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfC')}
          />
        )
        }
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
        { symOfAFound ? (
          <b>A</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfA')}
          />
        )
        }
      </span>
    </p>

    <p>
      Le triangle&nbsp;
      <b>ABC</b>
      &nbsp;et le triangle&nbsp;
      <b>A&apos;B&apos;C&apos;</b>
      &nbsp;sont&nbsp;
      <span className={`${foundWord ? 'symetric-found' : 'check-symetric-word'}`}>
        { foundWord ? (
          <b>SYMÉTRIQUES</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricWord')}
          />
        )
        }
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
  </div>
);

Two.propTypes = {
  foundWord: PropTypes.bool.isRequired,
  handleSymetricWord: PropTypes.func.isRequired,
  symOfAFound: PropTypes.bool.isRequired,
  symOfCFound: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};

export default Two;

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const PolygonPractice = ({
  foundWord,
  handleSymetricWord,
  toggleLine,
  polySymOfBFound,
  polySymOfCFound,
  polySymOfDFound,
  polySymOfEFound,
}) => (
  <div>
    <p className="testing-message">
      <b>2-</b>
      &nbsp;
      Le point
      &nbsp;
      <b>A&apos; : ( 11;12 )</b>
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
        <b>au point N</b>
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
      <b>B&apos; : ( 15;8 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { polySymOfBFound ? (
          <b>A</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfB', 'polygon')}
          />
        )
        }
      </span>
    </p>
    <p>
      <b>C&apos; : ( 15;12 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { polySymOfCFound ? (
          <b>B</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfC', 'polygon')}
          />
        )
        }
      </span>
    </p>
    <p>
      <b>D&apos; : ( 15;12 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { polySymOfDFound ? (
          <b>E</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfD', 'polygon')}
          />
        )
        }
      </span>
    </p>
    <p>
      <b>E&apos; : ( 15;12 )</b>
      &nbsp;
      est le
      &nbsp;
      <b>symétrique</b>
      &nbsp;
      de
      &nbsp;
      <span className="handle-result">
        { polySymOfEFound ? (
          <b>E</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricOfE', 'polygon')}
          />
        )
        }
      </span>
    </p>

    <p>
      Le polygône&nbsp;
      <b>ABCD</b>
      &nbsp;et le polygône&nbsp;
      <b>A&apos;B&apos;C&apos;D&apos;</b>
      &nbsp;sont&nbsp;
      <span className={`${foundWord ? 'symetric-found' : 'check-symetric-word'}`}>
        { foundWord ? (
          <b>SYMÉTRIQUES</b>
        ) : (
          <Input
            type="text"
            className="change-value"
            onChange={e => handleSymetricWord(e, 'symmetricWord', 'polygon')}
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

PolygonPractice.propTypes = {
  foundWord: PropTypes.bool.isRequired,
  handleSymetricWord: PropTypes.func.isRequired,
  polySymOfBFound: PropTypes.bool.isRequired,
  polySymOfCFound: PropTypes.bool.isRequired,
  polySymOfDFound: PropTypes.bool.isRequired,
  polySymOfEFound: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
};

export default PolygonPractice;

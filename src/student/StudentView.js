import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import { Stage } from 'react-konva';
import './StudentView.css';
import Triangle from '../component/Triangle';
import Decription from '../component/Decription';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    color: '#000',
    node: {
      A: 'A',
      B: 'B',
      C: 'C',
    },
    triangleA: [
      { x: 150, y: 250 },
      { x: 300, y: 300 },
      { x: 200, y: 400 },
    ],
    triangleB: [
      { x: 550, y: 650 },
      { x: 500, y: 500 },
      { x: 400, y: 600 },
    ],
  }

  render() {
    const {
      color,
      node,
      triangleA,
      triangleB,
    } = this.state;
    const { t } = this.props;
    return (
      <Row className="app-loader">
        <Col md={8} className="triangle-container">
          <Stage width="700" height="700">
            <Triangle
              color={color}
              node={node}
              points={
                [
                  { x: triangleA[0].x, y: triangleA[0].y },
                  { x: triangleA[1].x, y: triangleA[1].y },
                  { x: triangleA[2].x, y: triangleA[2].y },
                ]
              }
              t={t}
            />
            <Triangle
              color={color}
              node={node}
              points={
                [
                  { x: triangleA[0].x, y: triangleA[0].y },
                  { x: triangleA[1].x, y: triangleA[1].y },
                  { x: triangleA[2].x, y: triangleA[2].y },
                ]
              }
              t={t}
            />
            <Triangle
              color={color}
              node={node}
              points={
                [
                  { x: triangleB[0].x, y: triangleB[0].y },
                  { x: triangleB[1].x, y: triangleB[1].y },
                  { x: triangleB[2].x, y: triangleB[2].y },
                ]
              }
              t={t}
            />
          </Stage>
        </Col>
        <Col md={4} className="description-container">
          <div className="text-center">
            <Decription />
          </div>
        </Col>
      </Row>
    );
  }
}

export default withNamespaces('translations')(StudentView);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import { Stage } from 'react-konva';
import './StudentView.css';
import Triangle from '../component/Triangle';
import Decription from '../component/Decription';
import Liner from '../component/Liner';

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
    linePoints: [680, 50, 200, 600],
  }

  handleDragMove = (e) => {
    const { linePoints } = this.state;
    const newLinePoints = [...linePoints];
    newLinePoints[0] = e.target.x();
    newLinePoints[1] = e.target.y();
    this.handleChange(newLinePoints);
  }

  handleDragMoveOne = (e) => {
    const { linePoints } = this.state;
    const newLinePoints = [...linePoints];
    newLinePoints[2] = e.target.x();
    newLinePoints[3] = e.target.y();
    this.handleChange(newLinePoints);
  }

  handleChange = (newLinePoints) => {
    this.setState({
      linePoints: newLinePoints,
    });
  }

  render() {
    const {
      color,
      node,
      triangleA,
      triangleB,
      linePoints,
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
            <Liner
              color={color}
              linePoints={linePoints}
              handleDragMove={this.handleDragMove}
              handleDragMoveOne={this.handleDragMoveOne}
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
              linePoints={linePoints}
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

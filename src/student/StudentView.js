import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import {
  Stage,
} from 'react-konva';
import './StudentView.css';
import Triangle from '../component/triangle/Triangle';
import Decription from '../component/description/Decription';
import Grid from '../component/grid/Grid';
import Points from '../component/points/Points';
import Liner from '../component/liner/Liner';
import Axes from '../component/axes/Axes';
import MidPoint from '../component/axes/MidPoint';
import { AppState } from '../config/AppState';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = AppState;

  handleDragMoveOne = (e) => {
    const { linePoints } = this.state;
    const newLinePoints = [...linePoints];
    newLinePoints[2] = e.target.x();
    newLinePoints[3] = e.target.y();
    this.handleLineChange(newLinePoints);
  }

  handleDragMove = (e) => {
    const { linePoints, triangleA } = this.state;
    const newLinePoints = [...linePoints];
    const newTriangleAPoints = [...triangleA];
    newLinePoints[0] = e.target.x();
    newLinePoints[1] = e.target.y();
    const newTriangle = newTriangleAPoints.map(({ x, y }) => ({
      x: x + e.target.x(),
      y: y + e.target.y(),
    }));
    this.handleLineChange(newLinePoints);
    this.handleTriangleChange(newTriangle);
  }

  handleLineChange = (newLinePoints) => {
    this.setState({
      linePoints: newLinePoints,
    });
  }

  handleTriangleChange = (newTriangle) => {
    this.setState({
      triangleA: newTriangle,
    });
  }

  handleCheck = () => {
    const { displayed } = this.state;
    this.setState({
      displayed: !displayed,
    });
  }

  showPointsDisplay = () => {
    const { showPoints } = this.state;
    this.setState({
      showPoints: !showPoints,
    });
  }

  handleView = () => {
    const { toggleLine } = this.state;

    this.setState({
      toggleLine: !toggleLine,
      nodeB: toggleLine ? { A: "A'", B: "B'", C: "C'" } : { A: "A'", B: "C'", C: "B'" },
    });
  }

  render() {
    const {
      axePointsOne,
      axePointsTwo,
      axePointsThree,
      toggleLine,
      circlePoints,
      color,
      displayed,
      showPoints,
      node,
      nodeA,
      nodeB,
      triangleA,
      triangleB,
      linePoints,
      height,
      width,
      lineAxeOne,
      lineAxeTwo,
      lineAxeThree,
      triangleOpacity,
      triangleStroke,
      triangleShadowBlur,
      triangleStrokeWidth,
      shapeStroke,
      circleRadius,
      lineStroke,
      axeStroke,
      axeStrokeWidth,
      lineStrokeWidth,
      midPointStroke,
      midPointStrokeWidth,
      midPointShadowBlur,
      midPointRadius,
      gridStroke,
      gridStrokeWidth,
      pointSize,
    } = this.state;
    const { t } = this.props;
    return (
      <Row className="app-loader">
        <Col md={8} className="triangle-container">
          { displayed ? (
            <Stage width={width} height={height}>
              <Grid
                stroke={gridStroke}
                strokeWidth={gridStrokeWidth}
              />
            </Stage>
          ) : ''
          }
          { toggleLine ? (
            <Stage width={width} height={height}>
              <MidPoint
                color={color}
                circlePoints={circlePoints}
                stroke={midPointStroke}
                strokeWidth={midPointStrokeWidth}
                shadowBlur={midPointShadowBlur}
                radius={midPointRadius}
              />
              <Axes
                axePointsOne={axePointsOne}
                axePointsTwo={axePointsTwo}
                axePointsThree={axePointsThree}
                stroke={axeStroke}
                strokeWidth={axeStrokeWidth}
              />
            </Stage>
          )
            : (
              <Stage width={width} height={height}>
                <Liner
                  color={color}
                  linePoints={linePoints}
                  handleDragMove={this.handleDragMove}
                  handleDragMoveOne={this.handleDragMoveOne}
                  lineAxeOne={lineAxeOne}
                  lineAxeTwo={lineAxeTwo}
                  lineAxeThree={lineAxeThree}
                  lineStroke={lineStroke}
                  radius={circleRadius}
                  shadowBlur={triangleShadowBlur}
                  strokeWidth={lineStrokeWidth}
                />
              </Stage>
            )
          }
          { showPoints ? (
            <Stage width={width} height={height}>
              <Points
                fontSize={pointSize}
                color={color}
                node={nodeA}
                points={
                  [
                    { x: triangleA[0].x, y: triangleA[0].y },
                    { x: triangleA[1].x, y: triangleA[1].y },
                    { x: triangleA[2].x, y: triangleA[2].y },
                  ]
                }
              />
              <Points
                fontSize={pointSize}
                color={color}
                node={nodeB}
                points={
                  [
                    { x: triangleB[0].x, y: triangleB[0].y },
                    { x: triangleB[1].x, y: triangleB[1].y },
                    { x: triangleB[2].x, y: triangleB[2].y },
                  ]
                }
              />
            </Stage>
          ) : ''
          }
          <Stage width={width} height={height}>
            <Triangle
              opacity={triangleOpacity}
              stroke={triangleStroke}
              shadowBlur={triangleShadowBlur}
              strokeWidth={triangleStrokeWidth}
              shapeStroke={shapeStroke}
              radius={circleRadius}
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
              opacity={triangleOpacity}
              stroke={triangleStroke}
              shadowBlur={triangleShadowBlur}
              strokeWidth={triangleStrokeWidth}
              shapeStroke={shapeStroke}
              radius={circleRadius}
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
            <Decription
              handleCheck={this.handleCheck}
              showPointsDisplay={this.showPointsDisplay}
              handleView={this.handleView}
              toggleLine={toggleLine}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default withNamespaces('translations')(StudentView);

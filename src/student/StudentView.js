import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import {
  Stage,
} from 'react-konva';
import './StudentView.css';
import Description from '../component/description/Description';
import HorizontalGrid from '../component/grids/HorizontalGrid';
import VerticalGrid from '../component/grids/VerticalGrid';
import TriangleView from '../component/triangleView/TriangleView';
import PolygonView from '../component/polygonView/PolygonView';
import SquareView from '../component/squareView/SquareView';
import { AppState } from '../config/AppState';
import {
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
} from '../constants/Paths';

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

  handleForm = (e, target) => {
    if (target === 'triangle') {
      this.setState({
        isTriangleActive: true,
        isPolygonActive: false,
        isSquareActive: false,
      });
    }
    if (target === 'polygon') {
      this.setState({
        isTriangleActive: false,
        isPolygonActive: true,
        isSquareActive: false,
      });
    }
    if (target === 'square') {
      this.setState({
        isTriangleActive: false,
        isPolygonActive: false,
        isSquareActive: true,
      });
    }
  }


  render() {
    const {
      axePointsOne,
      axePointsTwo,
      axePointsThree,
      axeStroke,
      axeStrokeWidth,
      circlePoints,
      circleRadius,
      color,
      displayed,
      gridStroke,
      gridStrokeWidth,
      height,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      linePoints,
      lineAxeOne,
      lineAxeTwo,
      lineAxeThree,
      lineStroke,
      lineStrokeWidth,
      midPointStroke,
      midPointStrokeWidth,
      midPointShadowBlur,
      midPointRadius,
      nodeA,
      nodeB,
      pointSize,
      shapeStroke,
      showPoints,
      toggleLine,
      triangleA,
      triangleB,
      triangleOpacity,
      triangleStroke,
      triangleShadowBlur,
      triangleStrokeWidth,
      width,
    } = this.state;
    const { t } = this.props;
    return (
      <Row className="app-loader">
        <Col md={8} className="triangle-container">
          { displayed ? (
            <Stage width={width} height={height}>
              <HorizontalGrid
                stroke={gridStroke}
                strokeWidth={gridStrokeWidth}
                IDENTIC_PATH_0={IDENTIC_PATH_0}
                IDENTIC_PATH_1={IDENTIC_PATH_1}
              />
              <VerticalGrid
                stroke={gridStroke}
                strokeWidth={gridStrokeWidth}
                IDENTIC_PATH_0={IDENTIC_PATH_0}
                IDENTIC_PATH_1={IDENTIC_PATH_1}
              />
            </Stage>
          ) : ''
          }
          { isTriangleActive ? (
            <TriangleView
              axePointsOne={axePointsOne}
              axePointsTwo={axePointsTwo}
              axePointsThree={axePointsThree}
              axeStroke={axeStroke}
              axeStrokeWidth={axeStrokeWidth}
              circlePoints={circlePoints}
              circleRadius={circleRadius}
              color={color}
              handleDragMove={this.handleDragMove}
              handleDragMoveOne={this.handleDragMoveOne}
              height={height}
              linePoints={linePoints}
              lineAxeOne={lineAxeOne}
              lineAxeTwo={lineAxeTwo}
              lineAxeThree={lineAxeThree}
              lineStroke={lineStroke}
              lineStrokeWidth={lineStrokeWidth}
              midPointStroke={midPointStroke}
              midPointStrokeWidth={midPointStrokeWidth}
              midPointShadowBlur={midPointShadowBlur}
              midPointRadius={midPointRadius}
              nodeA={nodeA}
              nodeB={nodeB}
              pointSize={pointSize}
              shapeStroke={shapeStroke}
              showPoints={showPoints}
              triangleA={triangleA}
              triangleB={triangleB}
              triangleOpacity={triangleOpacity}
              triangleStroke={triangleStroke}
              triangleShadowBlur={triangleShadowBlur}
              triangleStrokeWidth={triangleStrokeWidth}
              toggleLine={toggleLine}
              width={width}
            />
          ) : ''
          }
          { isPolygonActive ? (
            <PolygonView />
          ) : ''
          }
          { isSquareActive ? (
            <SquareView />
          ) : ''
          }

        </Col>
        <Col md={4} className="description-container">
          <div className="text-center">
            <Description
              handleCheck={this.handleCheck}
              handleForm={this.handleForm}
              handleView={this.handleView}
              showPointsDisplay={this.showPointsDisplay}
              toggleLine={toggleLine}
              t={t}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default withNamespaces('translations')(StudentView);

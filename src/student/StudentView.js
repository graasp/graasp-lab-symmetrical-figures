import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import { Stage } from 'react-konva';
import './StudentView.css';
import Description from '../component/description/Description';
import HorizontalGrid from '../component/grids/HorizontalGrid';
import VerticalGrid from '../component/grids/VerticalGrid';
import TriangleView from '../component/triangleView/TriangleView';
import PolygonView from '../component/polygonView/PolygonView';
import SquareView from '../component/squareView/SquareView';
import { AppState } from '../config/AppState';
import {
  blackStroke,
  defaultSize,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
  IDENTIC_PATH_6,
  IDENTIC_PATH_7,
} from '../constants/Common';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = AppState;

  handleCheck = () => {
    const { showGrid } = this.state;
    this.setState({
      showGrid: !showGrid,
    });
  }

  handlePointsDisplay = () => {
    const { showPoints } = this.state;
    this.setState({
      showPoints: !showPoints,
    });
  }

  handleView = () => {
    const { toggleLine } = this.state;

    this.setState({
      toggleLine: !toggleLine,
      triangleNodeB: toggleLine ? { A: "A'", B: "B'", C: "C'" } : { A: "A'", B: "C'", C: "B'" },
      squareNodeB: toggleLine
        ? {
          A: "A'", B: "B'", C: "C'", D: "D'",
        } : {
          A: "C'", B: "D'", C: "A'", D: "B'",
        },
    });
  }

  handleForm = (e, target) => {
    if (target === 'triangle') {
      this.setState({
        kind: 'triangle',
        isTriangleActive: true,
        isPolygonActive: false,
        isSquareActive: false,
      });
    }
    if (target === 'polygon') {
      this.setState({
        kind: 'polygon',
        isTriangleActive: false,
        isPolygonActive: true,
        isSquareActive: false,
      });
    }
    if (target === 'square') {
      this.setState({
        kind: 'square',
        isTriangleActive: false,
        isPolygonActive: false,
        isSquareActive: true,
      });
    }
  }

  render() {
    const {
      color,
      showGrid,
      gridStroke,
      gridStrokeWidth,
      height,
      kind,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      pointSize,
      squareNodeA,
      squareNodeB,
      triangleNodeB,
      showPoints,
      midPointStroke,
      toggleLine,
      width,
    } = this.state;
    const { t } = this.props;
    return (
      <Row className="app-loader">
        <Col md={8} className="triangle-container">
          { showGrid ? (
            <Stage width={width} height={height}>
              <HorizontalGrid
                blackStroke={blackStroke}
                defaultSize={defaultSize}
                stroke={gridStroke}
                strokeWidth={gridStrokeWidth}
                IDENTIC_PATH_0={IDENTIC_PATH_0}
                IDENTIC_PATH_1={IDENTIC_PATH_1}
                IDENTIC_PATH_6={IDENTIC_PATH_6}
              />
              <VerticalGrid
                blackStroke={blackStroke}
                defaultSize={defaultSize}
                stroke={gridStroke}
                strokeWidth={gridStrokeWidth}
                IDENTIC_PATH_0={IDENTIC_PATH_0}
                IDENTIC_PATH_1={IDENTIC_PATH_1}
                IDENTIC_PATH_7={IDENTIC_PATH_7}
              />
            </Stage>
          ) : ''
          }
          { isTriangleActive ? (
            <TriangleView
              triangleNodeB={triangleNodeB}
              toggleLine={toggleLine}
              showPoints={showPoints}
            />
          ) : ''
          }
          { isPolygonActive ? (
            <PolygonView
              color={color}
              height={height}
              midPointStroke={midPointStroke}
              pointSize={pointSize}
              showPoints={showPoints}
              toggleLine={toggleLine}
              width={width}
            />
          ) : ''
          }
          { isSquareActive ? (
            <SquareView
              color={color}
              height={height}
              midPointStroke={midPointStroke}
              pointSize={pointSize}
              squareNodeA={squareNodeA}
              squareNodeB={squareNodeB}
              showPoints={showPoints}
              toggleLine={toggleLine}
              width={width}
            />
          ) : ''
          }

        </Col>
        <Col md={4} className="description-container">
          <div className="text-center">
            <Description
              handleCheck={this.handleCheck}
              handleForm={this.handleForm}
              handleView={this.handleView}
              showGrid={showGrid}
              showPoints={showPoints}
              handlePointsDisplay={this.handlePointsDisplay}
              kind={kind}
              isPolygonActive={isPolygonActive}
              isSquareActive={isSquareActive}
              isTriangleActive={isTriangleActive}
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

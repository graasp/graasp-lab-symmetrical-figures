import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Rect,
  Stage,
} from 'react-konva';
import { SquareState } from '../../config/SquareState';
import Annotation from './components/Annotation';
import Axes from './components/Axes';
import SymetricalAxis from './components/SymetricalAxis';
import {
  CIRCLE_RADIUS,
  CIRCLE_X,
  CIRCLE_Y,
  IDENTIC_PATH_2,
  IDENTIC_PATH_3,
  IDENTIC_PATH_4,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  blackStroke,
  blueStroke,
  radius,
  stroke,
  strokeWidth,
  squareFill,
  squareStroke,
  squareStrokeWidth,
  squareHeight,
  squareWidth,
  squareOneX,
  squareTwoX,
  squareCommonY,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  lineStrokeWidth,
} from '../../constants/Common';
// this component manage our square figures, the Symetrical axes
// and the names of each square. then sitch view based on choice
export class SquareView extends Component {
  state = SquareState;

  render() {
    const { middleLinePoint, middleLinePointLineStroke, shadowBlur } = this.state;
    const {
      color,
      height,
      midPointStroke,
      pointSize,
      squareNodeA,
      squareNodeB,
      showPoints,
      toggleLine,
      width,
    } = this.props;
    return (
      <div className="square-container">
        <Stage width={width} height={height}>
          <Layer>
            <Rect
              fill={squareFill}
              height={squareHeight}
              stroke={squareStroke}
              strokeWidth={squareStrokeWidth}
              x={squareOneX}
              y={squareCommonY}
              width={squareWidth}
            />
            <Rect
              fill={squareFill}
              height={squareHeight}
              stroke={squareStroke}
              strokeWidth={squareStrokeWidth}
              x={squareTwoX}
              y={squareCommonY}
              width={squareWidth}
            />
          </Layer>
        </Stage>
        { toggleLine ? (
          <Stage width={width} height={height}>
            <Axes
              CIRCLE_RADIUS={CIRCLE_RADIUS}
              CIRCLE_X={CIRCLE_X}
              CIRCLE_Y={CIRCLE_Y}
              IDENTIC_PATH_2={IDENTIC_PATH_2}
              IDENTIC_PATH_3={IDENTIC_PATH_3}
              IDENTIC_PATH_4={IDENTIC_PATH_4}
              IDENTIC_PATH_5={IDENTIC_PATH_5}
              IDENTIC_PATH_6={IDENTIC_PATH_6}
              blackStroke={blackStroke}
              blueStroke={blueStroke}
              strokeWidth={strokeWidth}
              shadowBlur={shadowBlur}
            />
          </Stage>
        )
          : (
            <Stage width={width} height={height}>
              <SymetricalAxis
                color={color}
                fontSize={pointSize}
                IDENTIC_PATH_2={IDENTIC_PATH_2}
                IDENTIC_PATH_3={IDENTIC_PATH_3}
                IDENTIC_PATH_4={IDENTIC_PATH_4}
                IDENTIC_PATH_5={IDENTIC_PATH_5}
                IDENTIC_PATH_6={IDENTIC_PATH_6}
                radius={radius}
                stroke={stroke}
                strokeWidth={lineStrokeWidth}
                blackStroke={blackStroke}
                circlePointsX={circlePointsX}
                circlePointsY={circlePointsY}
                circlePointsY2={circlePointsY2}
                lineStrokeWidth={lineStrokeWidth}
                shadowBlur={shadowBlur}
                middleLinePoint={middleLinePoint}
                midPointStroke={midPointStroke}
                middleLinePointLineStroke={middleLinePointLineStroke}
                squareNodeA={squareNodeA}
                squareNodeB={squareNodeB}
              />
            </Stage>
          )
        }
        { showPoints ? (
          <Stage width={width} height={height}>
            <Annotation
              IDENTIC_PATH_2={IDENTIC_PATH_2}
              IDENTIC_PATH_3={IDENTIC_PATH_3}
              IDENTIC_PATH_4={IDENTIC_PATH_4}
              IDENTIC_PATH_5={IDENTIC_PATH_5}
              IDENTIC_PATH_6={IDENTIC_PATH_6}
              middleLinePointLineStroke={middleLinePointLineStroke}
              fontSize={pointSize}
              squareNodeA={squareNodeA}
              squareNodeB={squareNodeB}
              blackStroke={blackStroke}
            />
          </Stage>
        ) : ''
        }
      </div>
    );
  }
}

SquareView.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  midPointStroke: PropTypes.string.isRequired,
  pointSize: PropTypes.number.isRequired,
  squareNodeA: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
  }).isRequired,
  squareNodeB: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
  }).isRequired,
  showPoints: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default SquareView;

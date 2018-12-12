import React from 'react';
import PropTypes from 'prop-types';
import { Stage } from 'react-konva';
import Triangle from '../triangle/Triangle';
import Points from '../points/Points';
import Liner from '../liner/Liner';
import Axes from '../axes/Axes';
import MidPoint from '../axes/MidPoint';

const TriangleView = ({
  axePointsOne,
  axePointsTwo,
  axeStroke,
  axeStrokeWidth,
  axePointsThree,
  circlePoints,
  circleRadius,
  color,
  handleDragMove,
  handleDragMoveOne,
  height,
  lineAxeOne,
  lineAxeTwo,
  lineAxeThree,
  linePoints,
  shapeStroke,
  lineStroke,
  lineStrokeWidth,
  midPointStroke,
  midPointStrokeWidth,
  midPointShadowBlur,
  midPointRadius,
  nodeA,
  nodeB,
  pointSize,
  showPoints,
  toggleLine,
  triangleA,
  triangleB,
  triangleOpacity,
  triangleStroke,
  triangleShadowBlur,
  triangleStrokeWidth,
  width,
}) => (
  <div className="triangle-content">
    { toggleLine ? (
      <Stage width={width} height={height}>
        <MidPoint
          circlePoints={circlePoints}
          color={color}
          shadowBlur={midPointShadowBlur}
          stroke={midPointStroke}
          strokeWidth={midPointStrokeWidth}
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
            handleDragMove={handleDragMove}
            handleDragMoveOne={handleDragMoveOne}
            lineAxeOne={lineAxeOne}
            lineAxeTwo={lineAxeTwo}
            lineAxeThree={lineAxeThree}
            linePoints={linePoints}
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
          color={color}
          fontSize={pointSize}
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
          color={color}
          fontSize={pointSize}
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
        color={color}
        nodeA={nodeA}
        opacity={triangleOpacity}
        points={
          [
            { x: triangleA[0].x, y: triangleA[0].y },
            { x: triangleA[1].x, y: triangleA[1].y },
            { x: triangleA[2].x, y: triangleA[2].y },
          ]
        }
        radius={circleRadius}
        shadowBlur={triangleShadowBlur}
        shapeStroke={shapeStroke}
        stroke={triangleStroke}
        strokeWidth={triangleStrokeWidth}
      />

      <Triangle
        color={color}
        linePoints={linePoints}
        nodeB={nodeB}
        opacity={triangleOpacity}
        points={
          [
            { x: triangleB[0].x, y: triangleB[0].y },
            { x: triangleB[1].x, y: triangleB[1].y },
            { x: triangleB[2].x, y: triangleB[2].y },
          ]
        }
        radius={circleRadius}
        shadowBlur={triangleShadowBlur}
        shapeStroke={shapeStroke}
        stroke={triangleStroke}
        strokeWidth={triangleStrokeWidth}
      />
    </Stage>
  </div>
);

TriangleView.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  circleRadius: PropTypes.number.isRequired,
  triangleOpacity: PropTypes.number.isRequired,
  triangleStrokeWidth: PropTypes.number.isRequired,
  triangleShadowBlur: PropTypes.number.isRequired,
  lineStrokeWidth: PropTypes.number.isRequired,
  triangleStroke: PropTypes.string.isRequired,
  midPointStroke: PropTypes.string.isRequired,
  midPointStrokeWidth: PropTypes.number.isRequired,
  midPointShadowBlur: PropTypes.number.isRequired,
  midPointRadius: PropTypes.number.isRequired,
  axeStroke: PropTypes.string.isRequired,
  axeStrokeWidth: PropTypes.number.isRequired,
  pointSize: PropTypes.number.isRequired,
  lineStroke: PropTypes.string.isRequired,
  handleDragMove: PropTypes.func.isRequired,
  handleDragMoveOne: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  shapeStroke: PropTypes.string.isRequired,
  circlePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axePointsOne: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axePointsTwo: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  axePointsThree: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeOne: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeTwo: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineAxeThree: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  toggleLine: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  nodeA: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
  }).isRequired,
  nodeB: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
  }).isRequired,
  triangleA: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
  triangleB: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default TriangleView;

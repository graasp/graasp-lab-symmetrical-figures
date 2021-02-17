/* eslint-disable no-useless-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stage } from 'react-konva';
import Triangle from '../triangle/Triangle';
import Points from '../points/Points';
import Liner from '../axes/Liner';
// import Axes from '../axes/Axes';
import MidPoint from '../axes/MidPoint';
import { AppState } from '../../config/AppState';
import { getLineEquation2, findClosestToPoint, distanceBetween } from '../../helpers';

class TriangleView extends Component {
  static propTypes = {
    scale: PropTypes.number.isRequired,
    showPoints: PropTypes.bool.isRequired,
    toggleLine: PropTypes.bool.isRequired,
    triangleNodeB: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    ...AppState,
    pointClicked: null,
    pointClickedLabel: '',
    mouseMoving: null,
    pointClickedRef: null,
    tracedLines: {
      A: { // Infos about the drawed line from point A
        symmetryLabel: "A'",
        startPoint: null,
        endPoint: null,
        distanceFromClickedToSymPoint: null,
        xDistance1: 340,
        yDistance1: 210,
        rotation: 50,
        subXDistance1: -40,
        subYDistance2: -80,
        distanceFromSymPointToEnd: null,
        isEqual: false,
      },
      B: { // Infos about the drawed line from point B
        symmetryLabel: "B'",
        startPoint: null,
        endPoint: null,
        distanceFromClickedToSymPoint: null,
        xDistance1: 410,
        yDistance1: 220,
        rotation: 70,
        subXDistance1: 0,
        subYDistance2: -90,
        distanceFromSymPointToEnd: null,
        isEqual: false,
      },
      C: { // Infos about the drawed line from point B
        symmetryLabel: "C'",
        startPoint: null,
        endPoint: null,
        distanceFromClickedToSymPoint: null,
        xDistance1: 290,
        yDistance1: 280,
        rotation: 30,
        subXDistance1: -50,
        subYDistance2: -10,
        distanceFromSymPointToEnd: null,
        isEqual: false,
      },
    },

  };

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

  // Method to execute when mouse is moving on the canvas
  handleStageMove = (e) => {
    const {
      pointClickedRef,
      circlePoints,
      pointClicked,
      pointClickedLabel,
      tracedLines,
    } = this.state;
    const node = pointClickedRef || e.target;
    const transform = node.getAbsoluteTransform().copy();
    transform.invert();
    const pos = node.getStage().getPointerPosition();
    const { x, y } = transform.point(pos);

    if (pointClicked) {
      this.setState({ mouseMoving: { x, y } });

      // Determine if the ending point of the Line is after the symmetry point
      const clickedX = pointClicked ? pointClicked.x : 0;
      const clickedY = pointClicked ? pointClicked.y : 0;

      if ((x + clickedX) > circlePoints[0] && (y + clickedY) > circlePoints[1]) {
        const lineEquation = getLineEquation2([clickedX, clickedY], circlePoints);
        const closestPoint = findClosestToPoint(x + clickedX, y + clickedY, lineEquation);
        this.setState({
          mouseMoving: {
            x: closestPoint.x - clickedX,
            y: closestPoint.y - clickedY,
          },
        });

        // Display the distance between the clicked point and the symmetry point
        const distance1 = distanceBetween([clickedX, clickedY], circlePoints);
        const distance2 = distanceBetween(circlePoints, [x + clickedX, y + clickedY]);

        if (pointClicked && pointClickedLabel) {
          this.setState({
            tracedLines: {
              ...tracedLines,
              [pointClickedLabel]: {
                ...tracedLines[pointClickedLabel],
                distanceFromClickedToSymPoint: parseInt(distance1, 10).toString(),
                distanceFromSymPointToEnd: parseInt(distance2, 10).toString(),
                isEqual: parseInt(distance1, 10) === parseInt(distance2, 10),
              },
            },
          });
        }
      }
    }
  };

  handleStageClick = (e) => {
    const {
      pointClicked,
      pointClickedLabel,
      mouseMoving,
      tracedLines,
    } = this.state;

    const node = e.target;
    const transform = node.getAbsoluteTransform().copy();
    transform.invert();
    const pos = node.getStage().getPointerPosition();
    const { x, y } = transform.point(pos);

    if (pointClicked && x > 0 && y > 0) {
      this.setState({
        tracedLines: {
          ...tracedLines,
          [pointClickedLabel]: {
            ...tracedLines[pointClickedLabel],
            startPoint: pointClicked,
            endPoint: { x: mouseMoving.x, y: mouseMoving.y },
          },
        },
        // Reset all points and coordinates informations
        pointClicked: null,
        pointClickedLabel: '',
        mouseMoving: null,
        pointClickedRef: null,
      });
    } else {
      return;
    }
  }

  handlePointClick = (e, pointLabel) => {
    const { tracedLines } = this.state;
    const { x, y } = e.target.attrs;

    this.setState({
      pointClickedRef: e.target,
      pointClicked: { x, y },
      pointClickedLabel: pointLabel,
      mouseMoving: { x: 0, y: 0 },
      tracedLines: {
        ...tracedLines,
        [pointLabel]: {
          ...tracedLines[pointLabel],
          startPoint: { x, y },
        },
      },
    });
  }

  render() {
    const {
      color,
      height,
      pointSize,
      circlePoints,
      circleRadius,
      linePoints,
      lineStroke,
      lineStrokeWidth,
      midPointStroke,
      midPointStrokeWidth,
      midPointShadowBlur,
      midPointRadius,
      triangleNodeA,
      greenShapeStroke,
      triangleA,
      triangleB,
      triangleOpacity,
      triangleStroke,
      triangleShadowBlur,
      triangleStrokeWidth,
      width,
      mouseMoving,
      pointClicked,
      tracedLines,
    } = this.state;

    const {
      showPoints,
      // triangleNodeB,
      toggleLine,
      scale,
    } = this.props;

    return (
      <div className="triangle-content">
        { toggleLine ? (
          <Stage
            width={width}
            height={height}
            scaleX={scale}
            scaleY={scale}
            onMouseMove={this.handleStageMove}
            onClick={this.handleStageClick}
          >
            <MidPoint
              circlePoints={circlePoints}
              color={color}
              shadowBlur={midPointShadowBlur}
              stroke={midPointStroke}
              strokeWidth={midPointStrokeWidth}
              radius={midPointRadius}
            />
            {/* <Axes
              triangleA={triangleA}
              triangleB={triangleB}
              stroke={axeStroke}
              strokeWidth={axeStrokeWidth}
            /> */}
          </Stage>
        )
          : (
            <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
              <Liner
                color={color}
                handleDragMove={this.handleDragMove}
                handleDragMoveOne={this.handleDragMoveOne}
                linePoints={linePoints}
                lineStroke={lineStroke}
                radius={circleRadius}
                shadowBlur={triangleShadowBlur}
                strokeWidth={lineStrokeWidth}
                triangleA={triangleA}
                triangleB={triangleB}
              />
            </Stage>
          )
        }
        { showPoints ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            <Points
              color={color}
              fontSize={pointSize}
              node={triangleNodeA}
              points={
                [
                  { x: triangleA[0].x, y: triangleA[0].y },
                  { x: triangleA[1].x, y: triangleA[1].y },
                  { x: triangleA[2].x, y: triangleA[2].y },
                ]
              }
            />
            {/* <Points
              color={color}
              fontSize={pointSize}
              node={triangleNodeB}
              points={
                [
                  { x: triangleB[0].x, y: triangleB[0].y },
                  { x: triangleB[1].x, y: triangleB[1].y },
                  { x: triangleB[2].x, y: triangleB[2].y },
                ]
              }
            /> */}
          </Stage>
        ) : ''
        }
        <Stage
          width={width}
          scaleX={scale}
          scaleY={scale}
          height={height}
          onMouseMove={this.handleStageMove}
          onClick={this.handleStageClick}
        >
          <Triangle
            color={color}
            triangleNodeA={triangleNodeA}
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
            shapeStroke={greenShapeStroke}
            stroke={triangleStroke}
            strokeWidth={triangleStrokeWidth}
            pointClicked={pointClicked}
            mouseMoving={mouseMoving}
            handlePointClick={this.handlePointClick}
            tracedLines={tracedLines}
          />
          {/* <Triangle
            color={color}
            linePoints={linePoints}
            triangleNodeB={triangleNodeB}
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
            shapeStroke={blueShapeStroke}
            stroke={triangleStroke}
            strokeWidth={triangleStrokeWidth}
          /> */}
        </Stage>
      </div>
    );
  }
}


export default TriangleView;

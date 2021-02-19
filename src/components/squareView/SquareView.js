/* eslint-disable no-useless-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Rect,
  Stage,
} from 'react-konva';
import Swal from 'sweetalert2';
import { SquareState } from '../../config/SquareState';
import Annotation from './components/Annotation';
import SquarePoints from './components/SquarePoints';
// import Axes from './components/Axes';
import MidPoint from '../axes/MidPoint';
import SymetricalAxis from './components/SymetricalAxis';
import {
  // CIRCLE_RADIUS,
  // CIRCLE_X,
  // CIRCLE_Y,
  IDENTIC_PATH_2,
  IDENTIC_PATH_3,
  IDENTIC_PATH_4,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  blackStroke,
  // blueStroke,
  radius,
  // redStroke,
  stroke,
  // strokeWidth,
  squareFill,
  squareStroke,
  squareStrokeWidth,
  squareHeight,
  squareWidth,
  squareOneX,
  // squareTwoX,
  squareCommonY,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  lineStrokeWidth,
} from '../../constants/Common';
import AppState from '../../config/AppState';
import { getLineEquation2, findClosestToPoint, distanceBetween } from '../../helpers';
// this component manage our square figures, the Symetrical axes
// and the names of each square. then sitch view based on choice
export class SquareView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...SquareState,
      ...AppState,
      pointClicked: null,
      pointClickedLabel: '',
      mouseMoving: null,
      pointClickedRef: null,
      circlePoints: [525, 275],
      tracedLines: {
        A: { // Infos about the drawed line from point A
          symmetryLabel: "A'",
          startPoint: null,
          endPoint: null,
          distanceFromClickedToSymPoint: null,
          xDistance1: 290,
          yDistance1: 225,
          rotation: 20,
          subXDistance1: -60,
          subYDistance2: -10,
          distanceFromSymPointToEnd: null,
          isEqual: false,
        },
        B: { // Infos about the drawed line from point B
          symmetryLabel: "B'",
          startPoint: null,
          endPoint: null,
          distanceFromClickedToSymPoint: null,
          xDistance1: 270,
          yDistance1: 320,
          rotation: -20,
          subXDistance1: -40,
          subYDistance2: 15,
          distanceFromSymPointToEnd: null,
          isEqual: false,
        },
        C: { // Infos about the drawed line from point B
          symmetryLabel: "C'",
          startPoint: null,
          endPoint: null,
          distanceFromClickedToSymPoint: null,
          xDistance1: 390,
          yDistance1: 335,
          rotation: -20,
          subXDistance1: -50,
          subYDistance2: -2,
          distanceFromSymPointToEnd: null,
          isEqual: false,
        },
        D: { // Infos about the drawed line from point B
          symmetryLabel: "D'",
          startPoint: null,
          endPoint: null,
          distanceFromClickedToSymPoint: null,
          xDistance1: 390,
          yDistance1: 200,
          rotation: 20,
          subXDistance1: -70,
          subYDistance2: -25,
          distanceFromSymPointToEnd: null,
          isEqual: false,
        },
      },
    };
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

      if ((x + clickedX) > circlePoints[0]) {
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

  condCheck = (condition, then, otherwise) => (condition ? then : otherwise)

  render() {
    const {
      middleLinePoint,
      middleLinePointLineStroke,
      shadowBlur,
      circlePoints,
      tracedLines,
      pointClicked,
      mouseMoving,
    } = this.state;

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
      scale,
    } = this.props;

    const {
      midPointStrokeWidth,
      midPointShadowBlur,
      midPointRadius,
    } = AppState;

    return (
      <div className="square-container">
        <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
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
            {/* <Rect
              fill={squareFill}
              height={squareHeight}
              stroke={redStroke}
              strokeWidth={squareStrokeWidth}
              x={squareTwoX}
              y={squareCommonY}
              width={squareWidth}
            /> */}
          </Layer>
        </Stage>
        { toggleLine ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            {/* <Axes
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
            /> */}
            <MidPoint
              circlePoints={circlePoints}
              color={color}
              shadowBlur={midPointShadowBlur}
              stroke={midPointStroke}
              strokeWidth={midPointStrokeWidth}
              radius={midPointRadius}
            />
          </Stage>
        )
          : (
            <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
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
          <Stage
            width={width}
            height={height}
            scaleX={scale}
            scaleY={scale}
            onMouseMove={this.handleStageMove}
            onClick={this.handleStageClick}
          >
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
            <SquarePoints
              radius={radius}
              Acoords={{ x: squareOneX, y: squareCommonY }}
              Bcoords={{ x: squareOneX, y: squareCommonY + squareHeight }}
              Ccoords={{ x: squareOneX + squareWidth, y: squareCommonY + squareHeight }}
              Dcoords={{ x: squareOneX + squareWidth, y: squareCommonY }}
              handlePointClick={this.handlePointClick}
              tracedLines={tracedLines}
              pointClicked={pointClicked}
              mouseMoving={mouseMoving}
              height={squareHeight}
              width={squareWidth}
            />
          </Stage>
        ) : ''
        }
        { tracedLines.A.endPoint && tracedLines.B.endPoint
        && tracedLines.C.endPoint && tracedLines.D.endPoint
        && this.condCheck(tracedLines.A.isEqual && tracedLines.B.isEqual
          && tracedLines.C.isEqual && tracedLines.D.isEqual
          ? Swal.fire({
            icon: 'sucess',
            title: 'Félicitation!',
            text: 'Vous venez de tracer deux figures symétriques!',
            confirmButtonColor: 'gray',
          })
          : Swal.fire({
            icon: 'error',
            title: 'Désolé',
            text: 'Vos figures ne sont pas symétriques',
            confirmButtonText: 'Reprendre',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Ok',
          }).then((result) => { if (result.isConfirmed) { window.location.reload(); } }))}
      </div>
    );
  }
}

SquareView.propTypes = {
  color: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
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

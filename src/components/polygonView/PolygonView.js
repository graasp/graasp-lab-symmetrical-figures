/* eslint-disable no-useless-return */
/* eslint-disable no-lonely-if */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layer, RegularPolygon, Stage } from 'react-konva';
import Swal from 'sweetalert2';

import PolyOneAnnotation from './components/PolyOneAnnotation';
import PolyOnePoints from './components/PolyOnePoints';
// import PolyTwoAnnotation from './components/PolyTwoAnnotation';
// import Axes from './components/Axes';
import MidPoint from '../axes/MidPoint';
import SymetricalAxis from './components/SymetricalAxis';
import { PolygonState } from '../../config/PolygonState';
import { getLineEquation2, findClosestToPoint, distanceBetween } from '../../helpers';
import AppState from '../../config/AppState';
import {
  SYM_AXIS_0,
  SYM_AXIS_1,
  SYM_AXIS_2,
  blackStroke,
  radius,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  lineStrokeWidth,
  redStroke,
  TEXT_X_0,
  TEXT_X_1,
  TEXT_X_2,
  TEXT_X_3,
  TEXT_X_4,
  TEXT_Y_0,
  TEXT_Y_1,
  TEXT_Y_2,
} from '../../constants/Common';

const initialState = {
  ...AppState,
  ...PolygonState,
  pointClicked: null,
  pointClickedLabel: '',
  mouseMoving: null,
  pointClickedRef: null,
  circlePoints: [450, 295],
  tracedLines: {
    A: { // Infos about the drawed line from point A
      symmetryLabel: "A'",
      startPoint: null,
      endPoint: null,
      distanceFromClickedToSymPoint: null,
      xDistance1: 290,
      yDistance1: 230,
      rotation: 20,
      subXDistance1: -60,
      subYDistance2: -17,
      distanceFromSymPointToEnd: null,
      isEqual: false,
    },
    B: { // Infos about the drawed line from point B
      symmetryLabel: "B'",
      startPoint: null,
      endPoint: null,
      distanceFromClickedToSymPoint: null,
      xDistance1: 185,
      yDistance1: 260,
      rotation: 5,
      subXDistance1: -40,
      subYDistance2: 10,
      distanceFromSymPointToEnd: null,
      isEqual: false,
    },
    C: { // Infos about the drawed line from point B
      symmetryLabel: "C'",
      startPoint: null,
      endPoint: null,
      distanceFromClickedToSymPoint: null,
      xDistance1: 310,
      yDistance1: 300,
      rotation: -10,
      subXDistance1: -50,
      subYDistance2: -10,
      distanceFromSymPointToEnd: null,
      isEqual: false,
    },
    D: { // Infos about the drawed line from point B
      symmetryLabel: "D'",
      startPoint: null,
      endPoint: null,
      distanceFromClickedToSymPoint: null,
      xDistance1: 340,
      yDistance1: 340,
      rotation: -20,
      subXDistance1: -70,
      subYDistance2: 5,
      distanceFromSymPointToEnd: null,
      isEqual: false,
    },
    E: { // Infos about the drawed line from point B
      symmetryLabel: "E'",
      startPoint: null,
      endPoint: null,
      distanceFromClickedToSymPoint: null,
      xDistance1: 350,
      yDistance1: 265,
      rotation: 10,
      subXDistance1: -50,
      subYDistance2: 0,
      distanceFromSymPointToEnd: null,
      isEqual: false,
    },
  },
};

export class PolygonView extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentWillReceiveProps(nextProps) {
    const { tracedLines } = initialState;
    const { toggleLine } = nextProps;
    const { toggleLine: tgLine } = this.props;

    if (toggleLine !== tgLine) {
      this.setState({
        ...initialState,
        tracedLines: {
          ...tracedLines,
          A: {
            ...tracedLines.A,
            xDistance1: toggleLine ? 290 : 300,
            yDistance1: toggleLine ? 230 : 200,
            rotation: toggleLine ? 20 : 0,
            subXDistance1: toggleLine ? -60 : -80,
            subYDistance2: toggleLine ? -17 : -20,
          },
          B: {
            ...tracedLines.B,
            xDistance1: toggleLine ? 185 : 190,
            yDistance1: toggleLine ? 260 : 260,
            rotation: toggleLine ? 5 : 0,
            subXDistance1: toggleLine ? -40 : -60,
            subYDistance2: toggleLine ? 10 : -20,
          },
          C: {
            ...tracedLines.C,
            xDistance1: toggleLine ? 310 : 190,
            yDistance1: toggleLine ? 300 : 350,
            rotation: toggleLine ? -10 : 0,
            subXDistance1: toggleLine ? -50 : -80,
            subYDistance2: toggleLine ? -10 : -20,
          },
          D: {
            ...tracedLines.D,
            xDistance1: toggleLine ? 340 : 310,
            yDistance1: toggleLine ? 340 : 350,
            rotation: toggleLine ? -20 : 0,
            subXDistance1: toggleLine ? -70 : -90,
            subYDistance2: toggleLine ? 5 : -20,
          },
          E: {
            ...tracedLines.E,
            xDistance1: toggleLine ? 350 : 310,
            yDistance1: toggleLine ? 265 : 260,
            rotation: toggleLine ? 10 : 0,
            subXDistance1: toggleLine ? -50 : -70,
            subYDistance2: toggleLine ? 0 : -20,
          },
        },
      });
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

  // Method to execute when mouse is moving on the canvas
  handleStageMove = (e) => {
    const {
      pointClickedRef,
      circlePoints,
      pointClicked,
      pointClickedLabel,
      tracedLines,
    } = this.state;

    const { toggleLine } = this.props;

    const node = pointClickedRef || e.target;
    const transform = node.getAbsoluteTransform().copy();
    transform.invert();
    const pos = node.getStage().getPointerPosition();
    const { x, y } = transform.point(pos);

    if (toggleLine) {
      // Logic for symmetry regarding a point
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
    } else {
      // Logic for symmetry regarding a line
      if (pointClicked) {
        let hiddenPoint = [];
        let distance1 = 0;
        let distance2 = 0;
        const clickedX = pointClicked ? pointClicked.x : 0;
        const clickedY = pointClicked ? pointClicked.y : 0;

        if (pointClickedLabel === 'A') hiddenPoint = [500, 220.01];
        else if (pointClickedLabel === 'B') hiddenPoint = [500, 275.001];
        else if (pointClickedLabel === 'C') hiddenPoint = [500, 363.01];
        else if (pointClickedLabel === 'D') hiddenPoint = [500, 363.01];
        else if (pointClickedLabel === 'E') hiddenPoint = [500, 275.01];

        distance1 = distanceBetween([clickedX, clickedY], [...hiddenPoint]);
        distance2 = distanceBetween([...hiddenPoint], [x + clickedX, y + clickedY]);

        // Determine if the ending point of the Line is after the symmetry point
        const lineEquation2 = getLineEquation2([clickedX, clickedY], [...hiddenPoint]);
        const closestPoint2 = findClosestToPoint(x + clickedX, y + clickedY, lineEquation2);
        this.setState({
          mouseMoving: {
            x: closestPoint2.x - clickedX,
            y: closestPoint2.y - clickedY,
          },
        });

        if ((x + clickedX > hiddenPoint[0]) && pointClicked && pointClickedLabel) {
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

    if (pointClicked && x > 5 && y > 5) {
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
      polygonNode,
      shadowBlur,
      tracedLines,
      circlePoints,
      pointClicked,
      mouseMoving,
    } = this.state;
    const {
      color,
      height,
      midPointStroke,
      pointSize,
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
      <div className="polygon-container">
        <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
          <Layer>
            <RegularPolygon
              radius={80}
              sides={5}
              stroke="#FF8A65"
              strokeWidth={4}
              x={200}
              y={300}
              opacity={0.7}
            />
          </Layer>
        </Stage>
        { toggleLine ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            <Layer>
              {/* <RegularPolygon
                radius={81}
                sides={5}
                stroke="#555555"
                strokeWidth={4}
                x={800}
                y={300}
                opacity={0.7}
                rotation={107}
              /> */}
            </Layer>
          </Stage>
        ) : (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            <Layer>
              {/* <RegularPolygon
                radius={80}
                sides={5}
                stroke="#555555"
                strokeWidth={4}
                x={800}
                y={300}
              /> */}
            </Layer>
          </Stage>
        )
        }
        { toggleLine ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            {/* <Axes
              CIRCLE_RADIUS={CIRCLE_RADIUS}
              CIRCLE_X={CIRCLE_X}
              CIRCLE_Y={CIRCLE_Y}
              POLY_PATH_0={POLY_PATH_0}
              POLY_PATH_1={POLY_PATH_1}
              POLY_PATH_2={POLY_PATH_2}
              POLY_PATH_5={POLY_PATH_5}
              POLY_PATH_6={POLY_PATH_6}
              POLY_PATH_7={POLY_PATH_7}
              POLY_PATH_8={POLY_PATH_8}
              POLY_PATH_9={POLY_PATH_9}
              POLY_PATH_10={POLY_PATH_10}
              POLY_PATH_13={POLY_PATH_13}
              POLY_PATH_14={POLY_PATH_14}
              POLY_PATH_15={POLY_PATH_15}
              POLY_PATH_16={POLY_PATH_16}
              POLY_PATH_17={POLY_PATH_17}
              POLY_PATH_18={POLY_PATH_18}
              POLY_PATH_19={POLY_PATH_19}
              POLY_PATH_20={POLY_PATH_20}
              POLY_PATH_21={POLY_PATH_21}
              POLY_PATH_22={POLY_PATH_22}
              POLY_PATH_23={POLY_PATH_23}
              POLY_PATH_24={POLY_PATH_24}
              POLY_PATH_25={POLY_PATH_25}
              POLY_PATH_26={POLY_PATH_26}
              POLY_PATH_27={POLY_PATH_27}
              POLY_PATH_12={POLY_PATH_12}
              blackStroke={blackStroke}
              blueStroke={blueStroke}
              redStroke={redStroke}
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
                SYM_AXIS_0={SYM_AXIS_0}
                SYM_AXIS_1={SYM_AXIS_1}
                SYM_AXIS_2={SYM_AXIS_2}
                radius={radius}
                redStroke={redStroke}
                strokeWidth={lineStrokeWidth}
                blackStroke={blackStroke}
                circlePointsX={circlePointsX}
                circlePointsY={circlePointsY}
                circlePointsY2={circlePointsY2}
                fontSize={pointSize}
                lineStrokeWidth={lineStrokeWidth}
                shadowBlur={shadowBlur}
                middleLinePoint={middleLinePoint}
                midPointStroke={midPointStroke}
                middleLinePointLineStroke={middleLinePointLineStroke}
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
            <PolyOneAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              fontSize={pointSize}
              polygonNode={polygonNode}
              blackStroke={blackStroke}
              TEXT_X_0={TEXT_X_0}
              TEXT_X_1={TEXT_X_1}
              TEXT_X_2={TEXT_X_2}
              TEXT_X_3={TEXT_X_3}
              TEXT_X_4={TEXT_X_4}
              TEXT_Y_0={TEXT_Y_0}
              TEXT_Y_1={TEXT_Y_1}
              TEXT_Y_2={TEXT_Y_2}
            />
            <PolyOnePoints
              blackStroke={blackStroke}
              radius={radius}
              handlePointClick={this.handlePointClick}
              tracedLines={tracedLines}
              pointClicked={pointClicked}
              mouseMoving={mouseMoving}
            />
          </Stage>
        ) : ''
        }
        { toggleLine ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            {/* <PolyTwoAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              fontSize={pointSize}
              polygonNode={polygonNode}
              blackStroke={blackStroke}
              TEXT_X_5={TEXT_X_5}
              TEXT_X_6={TEXT_X_6}
              TEXT_X_7={TEXT_X_7}
              TEXT_X_8={TEXT_X_8}
              TEXT_X_9={TEXT_X_9}
              TEXT_Y_3={TEXT_Y_3}
              TEXT_Y_4={TEXT_Y_4}
              TEXT_Y_5={TEXT_Y_5}
            /> */}
          </Stage>
        ) : (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            {/* <PolyTwoAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              fontSize={pointSize}
              polygonNode={polygonNode}
              blackStroke={blackStroke}
              TEXT_X_5={TEXT_X_5}
              TEXT_X_6={TEXT_X_6}
              TEXT_X_7={TEXT_X_7}
              TEXT_X_8={TEXT_X_8}
              TEXT_X_9={TEXT_X_9}
              TEXT_Y_3={TEXT_Y_0}
              TEXT_Y_4={TEXT_Y_2}
              TEXT_Y_5={TEXT_Y_1}
            /> */}
          </Stage>
        )
        }
        { tracedLines.A.endPoint && tracedLines.B.endPoint && tracedLines.C.endPoint
        && tracedLines.D.endPoint && tracedLines.E.endPoint
        && this.condCheck(tracedLines.A.isEqual && tracedLines.B.isEqual && tracedLines.C.isEqual
          && tracedLines.D.isEqual && tracedLines.E.isEqual
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

PolygonView.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  midPointStroke: PropTypes.string.isRequired,
  pointSize: PropTypes.number.isRequired,
  showPoints: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
};

export default PolygonView;

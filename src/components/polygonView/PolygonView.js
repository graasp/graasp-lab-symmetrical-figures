import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  RegularPolygon,
  Stage,
} from 'react-konva';
import PolyOneAnnotation from './components/PolyOneAnnotation';
import PolyTwoAnnotation from './components/PolyTwoAnnotation';
import Axes from './components/Axes';
import SymetricalAxis from './components/SymetricalAxis';
import { PolygonState } from '../../config/PolygonState';
import {
  CIRCLE_RADIUS,
  CIRCLE_X,
  CIRCLE_Y,
  SYM_AXIS_0,
  SYM_AXIS_1,
  SYM_AXIS_2,
  blackStroke,
  blueStroke,
  radius,
  strokeWidth,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  lineStrokeWidth,
  POLY_PATH_0,
  POLY_PATH_1,
  POLY_PATH_5,
  POLY_PATH_6,
  POLY_PATH_7,
  POLY_PATH_8,
  POLY_PATH_9,
  POLY_PATH_10,
  POLY_PATH_13,
  POLY_PATH_14,
  POLY_PATH_15,
  POLY_PATH_16,
  POLY_PATH_17,
  POLY_PATH_18,
  POLY_PATH_19,
  POLY_PATH_20,
  POLY_PATH_21,
  POLY_PATH_22,
  POLY_PATH_23,
  POLY_PATH_24,
  POLY_PATH_25,
  POLY_PATH_26,
  POLY_PATH_27,
  POLYGON_PATH_0,
  POLYGON_PATH_1,
  POLYGON_PATH_2,
  POLY_PATH_2,
  POLYGON_PATH_4,
  POLYGON_PATH_5,
  POLY_PATH_12,
  redStroke,
  TEXT_X_0,
  TEXT_X_1,
  TEXT_X_2,
  TEXT_X_3,
  TEXT_X_4,
  TEXT_X_5,
  TEXT_X_6,
  TEXT_X_7,
  TEXT_X_8,
  TEXT_X_9,
  TEXT_Y_0,
  TEXT_Y_1,
  TEXT_Y_2,
  TEXT_Y_3,
  TEXT_Y_4,
  TEXT_Y_5,
} from '../../constants/Common';
// this component manage our square figures, the Symetrical axes
// and the names of each square. then sitch view based on choice
export class PolygonView extends Component {
  state = PolygonState;

  render() {
    const {
      middleLinePoint,
      middleLinePointLineStroke,
      polygonNode,
      shadowBlur,
    } = this.state;
    const {
      color,
      height,
      midPointStroke,
      pointSize,
      showPoints,
      toggleLine,
      width,
    } = this.props;
    return (
      <div className="polygon-container">
        <Stage width={1000} height={1000}>
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
          <Stage width={1000} height={1000}>
            <Layer>
              <RegularPolygon
                radius={81}
                sides={5}
                stroke="#555555"
                strokeWidth={4}
                x={800}
                y={300}
                opacity={0.7}
                rotation={107}
              />
            </Layer>
          </Stage>
        ) : (
          <Stage width={1000} height={1000}>
            <Layer>
              <RegularPolygon
                fill="#FFFF8D"
                radius={80}
                sides={5}
                stroke="black"
                strokeWidth={4}
                x={800}
                y={300}
              />
            </Layer>
          </Stage>
        )
        }
        { toggleLine ? (
          <Stage width={width} height={height}>
            <Axes
              CIRCLE_RADIUS={CIRCLE_RADIUS}
              CIRCLE_X={CIRCLE_X}
              CIRCLE_Y={CIRCLE_Y}
              POLY_PATH_0={POLY_PATH_0}
              POLY_PATH_1={POLY_PATH_1}
              POLYGON_PATH_0={POLYGON_PATH_0}
              POLYGON_PATH_1={POLYGON_PATH_1}
              POLYGON_PATH_2={POLYGON_PATH_2}
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
              POLYGON_PATH_4={POLYGON_PATH_4}
              POLYGON_PATH_5={POLYGON_PATH_5}
              POLY_PATH_12={POLY_PATH_12}
              blackStroke={blackStroke}
              blueStroke={blueStroke}
              redStroke={redStroke}
              strokeWidth={strokeWidth}
              shadowBlur={shadowBlur}
            />
          </Stage>
        )
          : (
            <Stage width={width} height={height}>
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
          <Stage width={width} height={height}>
            <PolyOneAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              POLYGON_PATH_1={POLYGON_PATH_1}
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
          </Stage>
        ) : ''
        }
        { toggleLine ? (
          <Stage width={width} height={height}>
            <PolyTwoAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              POLYGON_PATH_1={POLYGON_PATH_1}
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
            />
          </Stage>
        ) : (
          <Stage width={width} height={height}>
            <PolyTwoAnnotation
              middleLinePointLineStroke={middleLinePointLineStroke}
              POLYGON_PATH_1={POLYGON_PATH_1}
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
            />
          </Stage>
        )
        }
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
};

export default PolygonView;

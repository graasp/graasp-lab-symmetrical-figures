import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  RegularPolygon,
  Stage,
} from 'react-konva';
import Annotation from './components/Annotation';
import Axes from './components/Axes';
import SymetricalAxis from './components/SymetricalAxis';
import { PolygonState } from '../../config/PolygonState';
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
  strokeWidth,
  circlePointsX,
  circlePointsY,
  circlePointsY2,
  lineStrokeWidth,
  POLYGON_PATH_0,
  POLYGON_PATH_1,
  POLYGON_PATH_2,
  POLYGON_PATH_3,
  POLYGON_PATH_4,
  POLYGON_PATH_5,
  POLYGON_PATH_6,
  POLYGON_PATH_7,
  redStroke,
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
              fill="yellow"
              radius={160}
              sides={5}
              stroke="black"
              strokeWidth={4}
              x={500}
              y={400}
              opacity={0.7}
            />
          </Layer>
        </Stage>
        { toggleLine ? (
          <Stage width={width} height={height}>
            <Axes
              CIRCLE_RADIUS={CIRCLE_RADIUS}
              CIRCLE_X={CIRCLE_X}
              CIRCLE_Y={CIRCLE_Y}
              POLYGON_PATH_0={POLYGON_PATH_0}
              POLYGON_PATH_1={POLYGON_PATH_1}
              POLYGON_PATH_2={POLYGON_PATH_2}
              POLYGON_PATH_3={POLYGON_PATH_3}
              POLYGON_PATH_4={POLYGON_PATH_4}
              POLYGON_PATH_5={POLYGON_PATH_5}
              POLYGON_PATH_6={POLYGON_PATH_6}
              POLYGON_PATH_7={POLYGON_PATH_7}
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
                IDENTIC_PATH_2={IDENTIC_PATH_2}
                IDENTIC_PATH_3={IDENTIC_PATH_3}
                IDENTIC_PATH_4={IDENTIC_PATH_4}
                IDENTIC_PATH_5={IDENTIC_PATH_5}
                IDENTIC_PATH_6={IDENTIC_PATH_6}
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
            <Annotation
              IDENTIC_PATH_2={IDENTIC_PATH_2}
              IDENTIC_PATH_3={IDENTIC_PATH_3}
              IDENTIC_PATH_4={IDENTIC_PATH_4}
              IDENTIC_PATH_5={IDENTIC_PATH_5}
              IDENTIC_PATH_6={IDENTIC_PATH_6}
              middleLinePointLineStroke={middleLinePointLineStroke}
              fontSize={pointSize}
              polygonNode={polygonNode}
              blackStroke={blackStroke}
            />
          </Stage>
        ) : ''
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

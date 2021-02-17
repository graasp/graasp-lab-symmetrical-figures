/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  Layer,
  Shape,
  Line,
  Text,
} from 'react-konva';

class Triangle extends Component {
  constructor(props) {
    super(props);
    const { stroke, color } = this.props;

    this.state = {
      A: {
        stroke,
        color,
      },
      B: {
        stroke,
        color,
      },
      C: {
        stroke,
        color,
      },
    };
  }

  handleMouseEnter = (point) => {
    document.body.style.cursor = 'pointer';
    this.setState(prevState => ({
      ...prevState,
      [point]: {
        stroke: 10,
        color: 'red',
      },
    }));
  }

  handleMouseLeave = (point) => {
    const { stroke, color } = this.props;
    document.body.style.cursor = 'default';

    this.setState(prevState => ({
      ...prevState,
      [point]: {
        stroke,
        color,
      },
    }));
  }

  condCheck = (condition, then, otherwise) => (condition ? then : otherwise)

  render() {
    const { A, B, C } = this.state;
    const {
      // color,
      points,
      // stroke,
      strokeWidth,
      shadowBlur,
      opacity,
      shapeStroke,
      radius,
      handlePointClick,
      pointClicked,
      mouseMoving,
      tracedLines,
    } = this.props;

    const symmetricLines = Object.values(tracedLines);

    return (
      <Layer>
        <Shape
      // the sceneFunc allow us to draw our triangle
      // specifyng coordinates of all points it should pass by
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);
            context.lineTo(points[1].x, points[1].y);
            context.lineTo(points[2].x, points[2].y);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          stroke={shapeStroke}
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        <Circle
          x={points[0].x}
          y={points[0].y}
          radius={radius}
          fill={A.color}
          stroke={A.stroke}
          strokeWidth={strokeWidth}
          shadowBlur={shadowBlur}
          onMouseMove={() => this.handleMouseEnter('A')}
          onMouseLeave={() => this.handleMouseLeave('A')}
          onClick={e => handlePointClick(e, 'A')}
        />
        <Circle
          x={points[1].x}
          y={points[1].y}
          radius={radius}
          fill={B.color}
          stroke={B.stroke}
          strokeWidth={strokeWidth}
          shadowBlur={shadowBlur}
          onMouseMove={() => this.handleMouseEnter('B')}
          onMouseLeave={() => this.handleMouseLeave('B')}
          onClick={e => handlePointClick(e, 'B')}
        />
        <Circle
          x={points[2].x}
          y={points[2].y}
          radius={radius}
          fill={C.color}
          stroke={C.stroke}
          strokeWidth={strokeWidth}
          shadowBlur={shadowBlur}
          onMouseMove={() => this.handleMouseEnter('C')}
          onMouseLeave={() => this.handleMouseLeave('C')}
          onClick={e => handlePointClick(e, 'C')}
        />

        {symmetricLines.map(
          ({
            startPoint,
            endPoint,
            symmetryLabel,
            distanceFromClickedToSymPoint,
            distanceFromSymPointToEnd,
            xDistance1,
            yDistance1,
            rotation,
            subXDistance1,
            subYDistance2,
          }) => (
            <>
              <Line
                key={JSON.stringify(startPoint)}
                x={this.condCheck(startPoint, startPoint ? startPoint.x : 0,
                  this.condCheck(pointClicked, pointClicked ? pointClicked.x : 0, null))}
                y={this.condCheck(startPoint, startPoint ? startPoint.y : 0,
                  this.condCheck(pointClicked, pointClicked ? pointClicked.y : 0, null))}
                points={[
                  0,
                  0,
                  this.condCheck(endPoint, endPoint ? endPoint.x : 0,
                    this.condCheck(mouseMoving, mouseMoving ? mouseMoving.x : 0, 0)),
                  this.condCheck(endPoint, endPoint ? endPoint.y : 0,
                    this.condCheck(mouseMoving, mouseMoving ? mouseMoving.y : 0, 0)),
                ]}
                stroke="#2196f3"
              />
              {endPoint
                && (
                <Text
                  fontSize={20}
                  x={endPoint.x + startPoint.x}
                  y={endPoint.y + startPoint.y}
                  text={symmetryLabel}
                />
                )
              }
              {distanceFromClickedToSymPoint
              && (
              <Text
                fontSize={20}
                x={xDistance1}
                y={yDistance1}
                rotation={rotation}
                text={distanceFromClickedToSymPoint}
              />
              )
              }
              {distanceFromSymPointToEnd
              && (
              <Text
                fontSize={20}
                rotation={rotation}
                x={endPoint
                  ? endPoint.x + startPoint.x + subXDistance1
                  : mouseMoving ? mouseMoving.x + startPoint.x + subXDistance1 : 0}
                y={endPoint
                  ? endPoint.y + startPoint.y + subYDistance2
                  : mouseMoving ? mouseMoving.y + startPoint.y + subYDistance2 : 0}
                text={distanceFromSymPointToEnd}
              />
              )
              }
            </>
          ),
        )
        }

        {symmetricLines.every(line => line.endPoint)
        && (
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(
              symmetricLines[0].endPoint.x + symmetricLines[0].startPoint.x,
              symmetricLines[0].endPoint.y + symmetricLines[0].startPoint.y,
            );
            context.lineTo(
              symmetricLines[1].endPoint.x + symmetricLines[1].startPoint.x,
              symmetricLines[1].endPoint.y + symmetricLines[1].startPoint.y,
            );
            context.lineTo(
              symmetricLines[2].endPoint.x + symmetricLines[2].startPoint.x,
              symmetricLines[2].endPoint.y + symmetricLines[2].startPoint.y,
            );
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          stroke={shapeStroke}
          strokeWidth={strokeWidth}
          opacity={opacity}
        />
        )
        }
      </Layer>);
  }
}

Triangle.propTypes = {
  color: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  shadowBlur: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  shapeStroke: PropTypes.string.isRequired,
  handlePointClick: PropTypes.func.isRequired,
  pointClicked: PropTypes.shape({}).isRequired,
  mouseMoving: PropTypes.shape({}).isRequired,
  tracedLines: PropTypes.shape({}).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Triangle;

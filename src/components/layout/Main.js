import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Stage } from 'react-konva';
import HorizontalGrid from '../grids/HorizontalGrid';
import VerticalGrid from '../grids/VerticalGrid';
import TriangleView from '../triangleView/TriangleView';
import PolygonView from '../polygonView/PolygonView';
import SquareView from '../squareView/SquareView';
import Styles from '../common/Styles';
import { AppState } from '../../config/AppState';
import { toggleSideMenu } from '../../actions';
import {
  blackStroke,
  defaultSize,
  IDENTIC_PATH_0,
  VERTICAL_IDENTIC_PATH_0,
  IDENTIC_PATH_1,
  IDENTIC_PATH_5,
  IDENTIC_PATH_6,
  IDENTIC_PATH_7,
} from '../../constants/Common';

const styles = Styles;

class Main extends Component {
  state = AppState;

  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  }

  render() {
    const {
      color,
      classes,
      gridStroke,
      gridStrokeWidth,
      height,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      midPointStroke,
      pointSize,
      showGrid,
      showPoints,
      showHeader,
      showSideMenu,
      themeColor,
      squareNodeA,
      squareNodeB,
      toggleLine,
      triangleNodeB,
      width,
      scale,
    } = this.props;

    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: showSideMenu,
        })}
      >
        { showHeader ? (
          <div className={classes.drawerHeader} />
        ) : ''
        }
        { showHeader ? ''
          : (
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
              onClick={this.handleToggleSideMenu(!showSideMenu)}
              style={{ backgroundColor: themeColor, outline: 'none' }}
            >
              { showSideMenu ? <MenuIcon style={{ color: 'white' }} /> : <ChevronRightIcon /> }
            </Fab>
          )
        }
        { showGrid ? (
          <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
            <HorizontalGrid
              blackStroke={blackStroke}
              defaultSize={defaultSize}
              stroke={gridStroke}
              strokeWidth={gridStrokeWidth}
              IDENTIC_PATH_0={IDENTIC_PATH_0}
              IDENTIC_PATH_1={IDENTIC_PATH_1}
              IDENTIC_PATH_6={IDENTIC_PATH_6}
              scale={scale}
            />
            <VerticalGrid
              blackStroke={blackStroke}
              defaultSize={defaultSize}
              stroke={gridStroke}
              strokeWidth={gridStrokeWidth}
              VERTICAL_IDENTIC_PATH_0={VERTICAL_IDENTIC_PATH_0}
              IDENTIC_PATH_5={IDENTIC_PATH_5}
              IDENTIC_PATH_7={IDENTIC_PATH_7}
              scale={scale}
            />
          </Stage>
        ) : ''
        }
        { isTriangleActive ? (
          <TriangleView
            triangleNodeB={triangleNodeB}
            toggleLine={toggleLine}
            showPoints={showPoints}
            scale={scale}
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
            scale={scale}
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
            scale={scale}
          />
        ) : ''
        }
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  gridStroke: PropTypes.string.isRequired,
  gridStrokeWidth: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  pointSize: PropTypes.number.isRequired,
  squareNodeA: PropTypes.shape({}).isRequired,
  squareNodeB: PropTypes.shape({}).isRequired,
  triangleNodeB: PropTypes.shape({}).isRequired,
  midPointStroke: PropTypes.string.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  dispatchToggleSideMenu: PropTypes.func.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showSideMenu: state.layout.showSideMenu,
  showGrid: state.simulation.showGrid,
  showPoints: state.simulation.showPoints,
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);

export default withStyles(styles, { withTheme: true })(connectedComponent);

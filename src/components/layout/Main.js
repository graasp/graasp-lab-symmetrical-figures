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
  IDENTIC_PATH_1,
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
      showTitle,
      showSideMenu,
      themeColor,
      squareNodeA,
      squareNodeB,
      toggleLine,
      triangleNodeB,
      width,
    } = this.props;

    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: showSideMenu,
        })}
      >
        { showTitle ? (
          <div className={classes.drawerHeader} />
        ) : ''
        }
        { showTitle ? ''
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
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
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
  themeColor: state.Setting.themeColor,
  showGrid: state.Setting.showGrid,
  showTitle: state.Setting.showTitle,
  showPoints: state.Setting.showPoints,
  showSideMenu: state.Setting.showSideMenu,
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);

export default withStyles(styles, { withTheme: true })(connectedComponent);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  Circle,
  Layer,
  Line,
  Stage,
} from 'react-konva';
import Description from '../description/Description';
import HorizontalGrid from '../grids/HorizontalGrid';
import VerticalGrid from '../grids/VerticalGrid';
import SettingModal from '../description/cases/observing/SettingModal';
import Styles from './Styles';
import AppState from '../../config/AppState';

const styles = Styles;

class PersistentDrawerRight extends React.Component {
  state = AppState;

  componentDidMount() {
    this.circleNode.getLayer().batchDraw();
  }

  handleCircleChange = (newCircle) => {
    this.setState({
      circlePoints: newCircle,
    });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDragEnd = (e) => {
    const { circlePoints, blockSnapSize } = this.state;
    const newCirclePoints = [...circlePoints];
    const newCircle = newCirclePoints.map(() => ({
      x: Math.round(e.target.x() / blockSnapSize) * blockSnapSize,
      y: Math.round(e.target.y() / blockSnapSize) * blockSnapSize,
    }));
    this.handleCircleChange(newCircle);
  }

  renderVerticalGrid = () => {
    const width = (2 / 3) * (window.innerWidth);
    const height = (5 / 6) * window.innerHeight;
    const { blockSnapSize } = this.state;
    const lines = [];
    const grouped = width / blockSnapSize;
    for (let i = 0; i < grouped; i += 1) {
      lines.push(
        <Line
          key={i}
          points={[Math.round(i * blockSnapSize) + 1, 0, Math.round(i * blockSnapSize) + 1, height]}
          stroke="#CCC"
          strokeWidth={1}
        />,
      );
    }
    return lines;
  }

  renderHorizontalGrid = () => {
    const width = (2 / 3) * window.innerWidth;
    const height = (5 / 6) * window.innerHeight;
    const { blockSnapSize } = this.state;
    const lines = [];
    const grouped = height / blockSnapSize;
    for (let j = 0; j < grouped; j += 1) {
      lines.push(
        <Line
          key={j}
          points={[0, Math.round(j * blockSnapSize), width, Math.round(j * blockSnapSize)]}
          stroke="#CCC"
          strokeWidth={1}
        />,
      );
    }
    return lines;
  }

  handleMouseOver = () => {
    console.log('mouse hovering circle', this.circleNode);
  }

  render() {
    const {
      classes,
      theme,
      showTitle,
      themeColor,
      height,
      kind,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      toggleLine,
      width,
      openModal,
      showGrid,
      showPoints,
      handleForm,
      handleView,
      onOpenModal,
      onCloseModal,
      mode,
      t,
    } = this.props;
    const { open, circlePoints } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        { showTitle ? (
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters style={{ backgroundColor: themeColor }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
                style={{ outline: 'none' }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" color="inherit" noWrap className={classes.title}>
                {t('Symmetrical Figures')}
              </Typography>
            </Toolbar>
          </AppBar>
        ) : ''
        }
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
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
                onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}
                className={classes.fab}
                style={{ backgroundColor: themeColor, outline: 'none' }}
              >
                { open ? <ChevronRightIcon /> : <MenuIcon style={{ color: 'white' }} /> }
              </Fab>
            )
          }
          { showGrid ? (
            <Stage width={width} height={height}>
              <HorizontalGrid
                renderHorizontalGrid={this.renderHorizontalGrid()}
              />
              <VerticalGrid
                renderVerticalGrid={this.renderVerticalGrid()}
              />
              <Layer>
                <Circle
                  x={circlePoints[0].x}
                  y={circlePoints[0].y}
                  radius={10}
                  fill="pink"
                  stroke={2}
                  strokeWidth={1}
                  shadowBlur={14}
                  draggable
                  onDragEnd={this.handleDragEnd}
                  ref={(node) => { this.circleNode = node; }}
                  onMouseEnter={this.handleMouseOver}
                />
              </Layer>
            </Stage>
          ) : ''
          }
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose} style={{ outline: 'none' }}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <h3>{t('Observe')}</h3>
          </div>
          <Divider />
          <Description
            handleForm={handleForm}
            showGrid={showGrid}
            showTitle={showTitle}
            showPoints={showPoints}
            handleView={handleView}
            kind={kind}
            isPolygonActive={isPolygonActive}
            isSquareActive={isSquareActive}
            isTriangleActive={isTriangleActive}
            toggleLine={toggleLine}
            t={t}
          />
          { mode === 'default' ? (
            <SettingModal
              openModal={openModal}
              onOpenModal={onOpenModal}
              onCloseModal={onCloseModal}
              t={t}
            />
          ) : ''
          }
        </Drawer>
      </div>
    );
  }
}

PersistentDrawerRight.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  kind: PropTypes.string.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  squareNodeA: PropTypes.shape({}).isRequired,
  squareNodeB: PropTypes.shape({}).isRequired,
  triangleNodeB: PropTypes.shape({}).isRequired,
  toggleLine: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  openModal: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.Setting.themeColor,
  showTitle: state.Setting.showTitle,
});

const connectedComponent = connect(mapStateToProps)(PersistentDrawerRight);

export default withStyles(styles, { withTheme: true })(connectedComponent);

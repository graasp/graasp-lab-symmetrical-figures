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
  useStrictMode,
} from 'react-konva';
import Description from '../description/Description';
import SettingModal from '../description/cases/observing/SettingsModal';
import Styles from './Styles';
import AppState from '../../config/AppState';

const styles = Styles;

class PersistentDrawerRight extends React.Component {
  state = AppState;

  componentDidMount() {
    useStrictMode(true);
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
    this.setState({ circlePoints: newCircle });
  }

  renderVerticalGrid = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
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
    const width = window.innerWidth;
    const height = window.innerHeight;
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

  render() {
    const {
      classes,
      theme,
      showTitle,
      themeColor,
      kind,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      toggleLine,
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
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                {this.renderVerticalGrid()}
                {this.renderHorizontalGrid()}
                <Circle
                  x={circlePoints[0].x}
                  y={circlePoints[0].y}
                  radius={15}
                  stroke="rgb(255, 87, 34)"
                  strokeWidth={5}
                  shadowBlur={14}
                  draggable
                  onDragEnd={this.handleDragEnd}
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
  kind: PropTypes.string.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  squareNodeA: PropTypes.shape({}).isRequired,
  squareNodeB: PropTypes.shape({}).isRequired,
  triangleNodeB: PropTypes.shape({}).isRequired,
  toggleLine: PropTypes.bool.isRequired,
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

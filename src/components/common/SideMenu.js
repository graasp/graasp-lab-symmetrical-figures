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
import { Stage } from 'react-konva';
import Description from '../description/Description';
import HorizontalGrid from '../grids/HorizontalGrid';
import VerticalGrid from '../grids/VerticalGrid';
import TriangleView from '../triangleView/TriangleView';
import PolygonView from '../polygonView/PolygonView';
import SquareView from '../squareView/SquareView';
import SettingsModal from '../description/cases/observing/SettingsModal';
import Styles from './Styles';
import {
  blackStroke,
  defaultSize,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
  IDENTIC_PATH_6,
  IDENTIC_PATH_7,
} from '../../constants/Common';

const styles = Styles;

class SideMenu extends React.Component {
  state = { open: false };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      theme,
      showHeader,
      themeColor,
      color,
      gridStroke,
      gridStrokeWidth,
      height,
      kind,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      pointSize,
      squareNodeA,
      squareNodeB,
      triangleNodeB,
      midPointStroke,
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
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        { showHeader ? (
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open} style={{ backgroundColor: themeColor }}>
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
          { showHeader ? (
            <div className={classes.drawerHeader} />
          ) : ''
          }
          { showHeader ? ''
            : (
              <Fab
                color="primary"
                aria-label="Add"
                onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}
                className={classes.fab}
                style={{ backgroundColor: themeColor, outline: 'none' }}
              >
                { open ? <MenuIcon style={{ color: 'white' }} /> : <ChevronRightIcon /> }
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
            showHeader={showHeader}
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
            <SettingsModal
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

SideMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  gridStroke: PropTypes.string.isRequired,
  gridStrokeWidth: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  kind: PropTypes.string.isRequired,
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
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
});

const connectedComponent = connect(mapStateToProps)(SideMenu);

export default withStyles(styles, { withTheme: true })(connectedComponent);

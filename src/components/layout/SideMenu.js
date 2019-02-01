import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Description from '../description/Description';
import Styles from '../common/Styles';
import { AppState } from '../../config/AppState';
import { toggleSideMenu } from '../../actions';

const styles = Styles;

class SideMenu extends Component {
  state = AppState;

  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  }

  render() {
    const {
      classes,
      theme,
      kind,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      toggleLine,
      showGrid,
      showPoints,
      showHeader,
      handleForm,
      handleView,
      showSideMenu,
      t,
    } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={showSideMenu}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleToggleSideMenu(false)} style={{ outline: 'none' }}>
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
        </Drawer>
      </Fragment>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  showHeader: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  isPolygonActive: PropTypes.bool.isRequired,
  isSquareActive: PropTypes.bool.isRequired,
  isTriangleActive: PropTypes.bool.isRequired,
  toggleLine: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  showPoints: PropTypes.bool.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
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


const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(SideMenu);

const StyledComponent = withStyles(styles, { withTheme: true })(ConnectedComponent);

export default withNamespaces()(StyledComponent);

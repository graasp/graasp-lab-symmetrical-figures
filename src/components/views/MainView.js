import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Main from '../layout/Main';
import SideMenu from '../layout/SideMenu';
import Styles from '../common/Styles';
import { AppState } from '../../config/AppState';
import {
  CANVAS_VIRTUAL_WIDTH,
  CANVAS_VIRTUAL_HEIGHT,
} from '../../constants/Common';

const styles = Styles;

class MainView extends Component {
  state = AppState;

  handleView = () => {
    const { toggleLine } = this.state;
    this.postMessage({ show_line: toggleLine });
    this.setState({
      toggleLine: !toggleLine,
      triangleNodeB: toggleLine ? { A: "A'", B: "B'", C: "C'" } : { A: "A'", B: "C'", C: "B'" },
      squareNodeB: toggleLine
        ? {
          A: "C'", B: "D'", C: "A'", D: "B'",
        } : {
          A: "A'", B: "B'", C: "C'", D: "D'",
        },
    });
  };

  handleForm = (e, target) => {
    this.postMessage({ figure_kind: target });
    if (target === 'triangle') {
      this.setState({
        kind: 'triangle',
        isTriangleActive: true,
        isPolygonActive: false,
        isSquareActive: false,
      });
    }
    if (target === 'polygon') {
      this.setState({
        kind: 'polygon',
        isTriangleActive: false,
        isPolygonActive: true,
        isSquareActive: false,
      });
    }
    if (target === 'square') {
      this.setState({
        kind: 'square',
        isTriangleActive: false,
        isPolygonActive: false,
        isSquareActive: true,
      });
    }
  };

  postMessage = (data) => {
    const message = JSON.stringify(data);
    console.log('message', message);
    if (document.postMessage) {
      document.postMessage(message, '*');
    } else if (window.postMessage) {
      window.postMessage(message, '*');
    } else {
      console.error('unable to find postMessage');
    }
  };


  render() {
    const {
      color,
      gridStroke,
      gridStrokeWidth,
      height,
      isPolygonActive,
      isSquareActive,
      isTriangleActive,
      kind,
      midPointStroke,
      pointSize,
      squareNodeA,
      squareNodeB,
      triangleNodeB,
      toggleLine,
      width,
    } = this.state;

    const { classes } = this.props;

    const scale = Math.min(
      width / CANVAS_VIRTUAL_WIDTH,
      height / CANVAS_VIRTUAL_HEIGHT,
    );

    return (
      <div className={classes.root}>
        <Main
          color={color}
          gridStroke={gridStroke}
          gridStrokeWidth={gridStrokeWidth}
          height={height}
          isPolygonActive={isPolygonActive}
          isSquareActive={isSquareActive}
          isTriangleActive={isTriangleActive}
          midPointStroke={midPointStroke}
          pointSize={pointSize}
          squareNodeA={squareNodeA}
          squareNodeB={squareNodeB}
          toggleLine={toggleLine}
          triangleNodeB={triangleNodeB}
          width={width}
          scale={scale}
        />
        <SideMenu
          kind={kind}
          isPolygonActive={isPolygonActive}
          isSquareActive={isSquareActive}
          isTriangleActive={isTriangleActive}
          toggleLine={toggleLine}
          handleForm={this.handleForm}
          handleView={this.handleView}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

MainView.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showGrid: state.simulation.showGrid,
  showPoints: state.simulation.showPoints,
});

const connectedComponent = connect(mapStateToProps)(MainView);

export default withStyles(styles, { withTheme: true })(connectedComponent);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Qs from 'qs';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import './StudentView.css';
import SideMe from '../component/Main/SideMe';
import { AppState } from '../config/AppState';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    showTitle: PropTypes.bool.isRequired,
    themeColor: PropTypes.string.isRequired,
    showGrid: PropTypes.bool.isRequired,
    showPoints: PropTypes.bool.isRequired,
  };

  state = AppState;

  onOpenModal = () => {
    this.setState({
      openModal: true,
    });
    this.postMessage({
      open_setting_modal: true,
    });
  }

  onCloseModal = () => {
    this.setState({
      openModal: false,
    });
    this.postMessage({
      open_setting_modal: false,
    });
  }

  handleView = () => {
    const { toggleLine } = this.state;
    this.postMessage({
      show_line: toggleLine,
    });
    this.setState({
      toggleLine: !toggleLine,
      triangleNodeB: toggleLine ? { A: "A'", B: "B'", C: "C'" } : { A: "A'", B: "C'", C: "B'" },
      squareNodeB: toggleLine
        ? {
          A: "A'", B: "B'", C: "C'", D: "D'",
        } : {
          A: "C'", B: "D'", C: "A'", D: "B'",
        },
    });
  }

  handleForm = (e, target) => {
    this.postMessage({
      figure_kind: target,
    });
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
  }

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
    } = this.state;

    const {
      mode = 'default',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });

    const {
      t,
      themeColor,
      showTitle,
      showGrid,
      showPoints,
    } = this.props;
    return (
      <div className="app-parent">
        <SideMe
          handleForm={this.handleForm}
          showGrid={showGrid}
          showTitle={showTitle}
          showPoints={showPoints}
          handleView={this.handleView}
          kind={kind}
          isPolygonActive={isPolygonActive}
          isSquareActive={isSquareActive}
          isTriangleActive={isTriangleActive}
          toggleLine={toggleLine}
          t={t}
          color={color}
          height={height}
          midPointStroke={midPointStroke}
          pointSize={pointSize}
          squareNodeA={squareNodeA}
          squareNodeB={squareNodeB}
          width={width}
          gridStroke={gridStroke}
          gridStrokeWidth={gridStrokeWidth}
          triangleNodeB={triangleNodeB}
          openModal={openModal}
          themeColor={themeColor}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
          mode={mode}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themeColor: state.Setting.themeColor,
  showTitle: state.Setting.showTitle,
  showPoints: state.Setting.showPoints,
  showGrid: state.Setting.showGrid,
});

const connectedComponent = connect(mapStateToProps)(StudentView);

export default withNamespaces('translations')(connectedComponent);

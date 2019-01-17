import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Qs from 'qs';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import { Stage } from 'react-konva';
import './StudentView.css';
import SettingModal from '../component/description/cases/observing/SettingModal';
import Description from '../component/description/Description';
import HorizontalGrid from '../component/grids/HorizontalGrid';
import VerticalGrid from '../component/grids/VerticalGrid';
import TriangleView from '../component/triangleView/TriangleView';
import PolygonView from '../component/polygonView/PolygonView';
import SquareView from '../component/squareView/SquareView';
import { AppState } from '../config/AppState';
import {
  blackStroke,
  defaultSize,
  IDENTIC_PATH_0,
  IDENTIC_PATH_1,
  IDENTIC_PATH_6,
  IDENTIC_PATH_7,
} from '../constants/Common';

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
        <Row>
          <Col md={12}>
            { showTitle ? (
              <h1 className="lab-title" style={{ backgroundColor: themeColor }}>{t('Symmetrical Figures')}</h1>
            ) : ''
            }
          </Col>
        </Row>
        <Row className="app-loader">
          <Col md={8} className="triangle-container">
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

          </Col>
          <Col md={4} className="description-container">
            <div className="text-center">
              <Description
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
              />
            </div>
          </Col>
        </Row>
        { mode === 'default' ? (
          <SettingModal
            openModal={openModal}
            onOpenModal={this.onOpenModal}
            onCloseModal={this.onCloseModal}
            t={t}
          />
        ) : ''
        }
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

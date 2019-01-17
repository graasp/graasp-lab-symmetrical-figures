import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { withStyles } from '@material-ui/core/styles';
import {
  Col,
  Row,
} from 'reactstrap';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    right: theme.spacing.unit * 4,
    bottom: theme.spacing.unit * 4,
    position: 'fixed',
  },
});

const Displayer = ({
  t,
  toggleTitle,
  showTitle,
  handleCheck,
  handlePointsDisplay,
  showPoints,
  showGrid,
}) => (
  <div className="modal-container">
    <Row className="title-switch">
      <Col xs={8}>
        <h5 className="display-title">{t('Display Lab title')}</h5>
      </Col>
      <Col xs={4}>
        <Switch
          onChange={toggleTitle}
          checked={showTitle}
          id="title-switch"
        />
      </Col>
    </Row>
    <Row>
      <Col xs={8}>
        <h5 className="display-grid">{t('Display points')}</h5>
      </Col>
      <Col xs={4}>
        <Switch
          onChange={handlePointsDisplay}
          checked={showPoints}
          id="point-switch"
        />
      </Col>
    </Row>
    <Row>
      <Col xs={8}>
        <h5 className="display-line">{t('Display grid')}</h5>
      </Col>
      <Col xs={4}>
        <Switch
          onChange={handleCheck}
          checked={showGrid}
          id="grid-switch"
        />
      </Col>
    </Row>
  </div>
);

Displayer.propTypes = {
  t: PropTypes.func.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  showTitle: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handlePointsDisplay: PropTypes.func.isRequired,
  showPoints: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  themeColor: state.Setting.themeColor,
  showTitle: state.Setting.showTitle,
  showPoints: state.Setting.showPoints,
  showGrid: state.Setting.showGrid,
});

const connectedComponent = connect(mapStateToProps)(Displayer);
export default withStyles(styles)(connectedComponent);

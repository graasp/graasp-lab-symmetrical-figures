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
  handleToggleHeader,
  showHeader,
  handleToggleGrid,
  handleTogglePoints,
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
          onChange={handleToggleHeader}
          checked={showHeader}
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
          onChange={handleTogglePoints}
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
          onChange={handleToggleGrid}
          checked={showGrid}
          id="grid-switch"
        />
      </Col>
    </Row>
  </div>
);

Displayer.propTypes = {
  t: PropTypes.func.isRequired,
  handleToggleHeader: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  handleToggleGrid: PropTypes.func.isRequired,
  handleTogglePoints: PropTypes.func.isRequired,
  showPoints: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showPoints: state.simulation.showPoints,
  showGrid: state.simulation.showGrid,
});

const connectedComponent = connect(mapStateToProps)(Displayer);
export default withStyles(styles)(connectedComponent);

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

const Displayer = ({ t, toggleTitle, showTitle }) => (
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
  </div>
);

Displayer.propTypes = {
  t: PropTypes.func.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  showTitle: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  themeColor: state.Setting.themeColor,
  showTitle: state.Setting.showTitle,
});

const connectedComponent = connect(mapStateToProps)(Displayer);
export default withStyles(styles)(connectedComponent);

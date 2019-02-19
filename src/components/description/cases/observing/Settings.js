import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Settings';
import Fab from '@material-ui/core/Fab';

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

const Settings = ({
  onOpenModal,
  classes,
  themeColor,
}) => (
  <div className="modal-container">
    <Fab
      color="primary"
      aria-label="Add"
      onClick={onOpenModal}
      className={classes.fab}
      style={{ backgroundColor: themeColor }}
    >
      <AddIcon />
    </Fab>
  </div>
);

Settings.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  themeColor: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
});

const connectedComponent = connect(mapStateToProps)(Settings);

export default withStyles(styles)(connectedComponent);

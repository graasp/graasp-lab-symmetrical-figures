import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';

const TabComponent = ({
  handleCase,
  swicthCase,
}) => (
  <div>
    <Button
      outline
      color="secondary"
      className={`${swicthCase ? 'observe-button-active' : ''} observe-button`}
      onClick={e => handleCase(e, 'observing')}
    >
      Observer
    </Button>
    <Button
      outline
      color="secondary"
      className={`${swicthCase ? '' : 'test-button-active'} test-button`}
      onClick={e => handleCase(e, 'testing')}
    >
      Tester
    </Button>
  </div>
);

TabComponent.propTypes = {
  handleCase: PropTypes.func.isRequired,
  swicthCase: PropTypes.bool.isRequired,
};
export default TabComponent;

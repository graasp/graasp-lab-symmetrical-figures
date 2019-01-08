import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  UncontrolledTooltip,
} from 'reactstrap';

const TabComponent = ({
  handleCase,
  obserViewActive,
}) => (
  <div>
    <Button
      outline
      color="secondary"
      className={`${obserViewActive ? 'observe-button-active' : ''} observe-button`}
      onClick={e => handleCase(e, 'observing')}
    >
      Observer
    </Button>
    <Button
      outline
      color="secondary"
      className={`${obserViewActive ? '' : 'test-button-active'} test-button`}
      id="disabledBtn"
    >
      Tester
    </Button>
    <UncontrolledTooltip placement="bottom" target="disabledBtn">
      Coming Soon!
    </UncontrolledTooltip>

  </div>
);

TabComponent.propTypes = {
  handleCase: PropTypes.func.isRequired,
  obserViewActive: PropTypes.bool.isRequired,
};
export default TabComponent;

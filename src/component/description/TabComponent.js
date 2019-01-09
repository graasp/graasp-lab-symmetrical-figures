import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  UncontrolledTooltip,
} from 'reactstrap';

const TabComponent = ({
  handleCase,
  obserViewActive,
  t,
}) => (
  <div>
    <Button
      outline
      color="secondary"
      className={`${obserViewActive ? 'observe-button-active' : ''} observe-button`}
      onClick={e => handleCase(e, 'observing')}
    >
      {t('Observe')}
    </Button>
    <Button
      outline
      color="secondary"
      className={`${obserViewActive ? '' : 'test-button-active'} test-button`}
      id="disabledBtn"
    >
      {t('Test')}
    </Button>
    <UncontrolledTooltip placement="bottom" target="disabledBtn">
      {t('Coming Soon!')}
    </UncontrolledTooltip>

  </div>
);

TabComponent.propTypes = {
  handleCase: PropTypes.func.isRequired,
  obserViewActive: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};
export default TabComponent;

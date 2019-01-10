import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import Select from 'react-select';
import { options } from '../../../../config/options';

const LangBox = ({
  handleChangeLang,
}) => (
  <div className="control-container">
    <Row className="modal-lang-container">
      <Col xs="4">
        <h4 className="modal-lang-title">Language</h4>
      </Col>
      <Col xs="8">
        <Select
          defaultValue={options[0]}
          options={options}
          onChange={handleChangeLang}
          className="App-Select"
        />
      </Col>
    </Row>
  </div>
);

LangBox.propTypes = {
  handleChangeLang: PropTypes.func.isRequired,
};

export default withNamespaces('translations')(LangBox);
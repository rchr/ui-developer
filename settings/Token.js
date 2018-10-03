import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { ConfigForm } from '@folio/stripes/smart-components';
import { Col, Row, TextField } from '@folio/stripes/components';

class Token extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.onSave = this.onSave.bind(this);
  }

  onSave(data) {
    const stripes = this.props.stripes;
    stripes.setToken(data.token);
  }

  render() {
    const stripes = this.props.stripes;
    const token = stripes.store.getState().okapi.token;

    return (
      <div style={{ width: '100%' }}>
        <ConfigForm onSubmit={this.onSave} label={this.props.label} initialValues={{ token }}>
          <Row>
            <Col xs={12}>
              <Field
                component={TextField}
                id="token"
                name="token"
                label="Authentication token (JWT)"
              />
            </Col>
          </Row>
        </ConfigForm>
      </div>
    );
  }
}

export default Token;

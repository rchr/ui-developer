import { merge } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import TextField from '@folio/stripes-components/lib/TextField';
import Checkbox from '@folio/stripes-components/lib/Checkbox';
import ConfigForm from '@folio/stripes-smart-components/lib/ConfigManager/ConfigForm';
import { Field } from 'redux-form';

class Configuration extends React.Component {
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
    merge(stripes, data);
    this.forceUpdate();
  }

  render() {
    const stripes = this.props.stripes;
    if (!stripes.config.autoLogin)
      stripes.config.autoLogin = { username: '', password: '' };

    const initialValues = {
      logger: {
        categories: stripes.logger.categories,
      },
      config: {
        showPerms: stripes.config.showPerms || false,
        listInvisiblePerms: stripes.config.listInvisiblePerms || false,
        hasAllPerms: stripes.config.hasAllPerms || false,
        autoLogin: {
          username: stripes.config.autoLogin.username,
          password: stripes.config.autoLogin.password,
        },
      },
    };

    return (
      <div style={{ width: '100%' }}>
        <ConfigForm onSubmit={this.onSave} label={this.props.label} initialValues={initialValues}>
          <Row>
            <Col xs={12}>
              <Field
                htmlFor="1"
                component={TextField}
                name="logger.categories"
                label="Logging categories"
              />
              (See <a href="https://github.com/folio-org/stripes-core/blob/master/doc/dev-guide.md#configuring-the-logger">the documentation</a> for available levels.)
              <hr />
              <Field
                htmlFor="2"
                component={TextField}
                name="config.autoLogin.username"
                label="Auto-login username"
              />
              <Field
                htmlFor="3"
                component={TextField}
                name="config.autoLogin.password"
                label="Auto-login password"
              />
              <hr />
              <Field
                htmlFor="4"
                component={Checkbox}
                name="config.showPerms"
                id="config.showPerms"
                label="Show permissions in user menu?"
              />
              <Field
                htmlFor="5"
                component={Checkbox}
                name="config.listInvisiblePerms"
                id="config.listInvisiblePerms"
                label="List &quot;invisible&quot; permissions in add-perm menus?"
              />
              <Field
                htmlFor="6"
                component={Checkbox}
                name="config.hasAllPerms"
                id="config.hasAllPerms"
                label="Act as though user has all permissions?"
              />
            </Col>
          </Row>
        </ConfigForm>
      </div>
    );
  }
}

export default Configuration;

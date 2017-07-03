import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Pane from '@folio/stripes-components/lib/Pane';
import TextField from '@folio/stripes-components/lib/TextField';
import Checkbox from '@folio/stripes-components/lib/Checkbox';


const Entry = (props) => {
  const { htmlFor, caption, value, onChange, isBool } = props;
  const fullFor = `dev-settings-config-${htmlFor}`;
  return (
    <Row>
      <Col xs={12}>
        <label htmlFor={fullFor}>{caption}</label>
        {isBool ?
          <Checkbox id="{fullFor}" checked={value} onChange={onChange} />
          :
          <TextField id={fullFor} value={value} onChange={onChange} />
        }
      </Col>
    </Row>
  );
};

Entry.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  isBool: PropTypes.bool,
};


class Configuration extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  onChange(e, path, isBool) {
    const stripes = this.props.stripes;
    const lastComponent = path.pop();
    const val = isBool ? e.target.checked : e.target.value;

    _.get(stripes, path)[lastComponent] = val;
    stripes.logger.log('action', `changed ${path.join('.')}.${lastComponent} to '${val}'`);
    this.forceUpdate();
  }

  render() {
    const stripes = this.props.stripes;
    if (!stripes.config.autoLogin)
      stripes.config.autoLogin = { username: '', password: '' };

    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <Entry
          htmlFor="1"
          caption="Logging categories"
          value={stripes.logger.categories}
          onChange={e => this.onChange(e, ['logger', 'categories'])}
        />
        <hr />
        <Entry
          htmlFor="2"
          caption="Auto-login username"
          value={stripes.config.autoLogin.username}
          onChange={e => this.onChange(e, ['config', 'autoLogin', 'username'])}
        />
        <Entry
          htmlFor="3"
          caption="Auto-login password"
          value={stripes.config.autoLogin.password}
          onChange={e => this.onChange(e, ['config', 'autoLogin', 'password'])}
        />
        <hr />
        <Entry
          htmlFor="4"
          caption="Show permissions in user menu?"
          value={stripes.config.showPerms}
          onChange={e => this.onChange(e, ['config', 'showPerms'], true)} isBool
        />
        <Entry
          htmlFor="5"
          caption="List &quot;invisible&quot; permissions in add-perm menus??"
          value={stripes.config.listInvisiblePerms}
          onChange={e => this.onChange(e, ['config', 'listInvisiblePerms'], true)} isBool
        />
        <Entry
          htmlFor="6"
          caption="Act as though user has all permissions"
          value={stripes.config.hasAllPerms}
          onChange={e => this.onChange(e, ['config', 'hasAllPerms'], true)} isBool
        />
      </Pane>
    );
  }
}

export default Configuration;

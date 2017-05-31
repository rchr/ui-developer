// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { HotKeys } from 'react-hotkeys';
import Pane from '@folio/stripes-components/lib/Pane';
import TextField from '@folio/stripes-components/lib/TextField';

class Configuration extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static contextTypes = {
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  onChangeLoggingCategories(e) {
    const stripes = this.context.stripes;
    const cat = e.target.value;
    stripes.logger.categories = cat;
    stripes.logger.log('action', `changed logging categories to '${cat}'`);
    this.forceUpdate();
  }

  onChangeAutoLoginUsername(e) {
    const stripes = this.context.stripes;
    const val = e.target.value;
    stripes.config.autoLogin.username = val;
    stripes.logger.log('action', `changed autoLogin username to '${val}'`);
    this.forceUpdate();
  }

  onChangeAutoLoginPassword(e) {
    const stripes = this.context.stripes;
    const val = e.target.value;
    stripes.config.autoLogin.password = val;
    stripes.logger.log('action', `changed autoLogin password to '${val}'`);
    this.forceUpdate();
  }

  render() {
    const stripes = this.context.stripes;
    if (!stripes.config.autoLogin)
      stripes.config.autoLogin = { username: '', password: '' };

    const globalKeyMap = {
      stripesHome: 'command+up',
      stripesAbout: 'command+down',
    };

    const handlers = {
      stripesHome: () => {
        console.log('handler for stripesHome: going to /');
        this.props.history.push('/');
      },
      stripesAbout: () => {
        console.log('handler for stripesAbout: going to /about');
        this.props.history.push('/about');
      },
    };

    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <HotKeys keyMap={globalKeyMap} handlers={handlers}>
          <Row>
            <Col xs={12}>
              <label htmlFor="settingLoggingCategories">Logging categories</label>
              <TextField value={stripes.logger.categories} onChange={e => this.onChangeLoggingCategories(e)} />
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col xs={12}>
              <label htmlFor="settingAutoLoginUsername">Auto-login username</label>
              <TextField value={stripes.config.autoLogin.username} onChange={e => this.onChangeAutoLoginUsername(e)} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <label htmlFor="settingAutoLoginPassword">Auto-login password</label>
              <TextField value={stripes.config.autoLogin.password} onChange={e => this.onChangeAutoLoginPassword(e)} />
            </Col>
          </Row>
        </HotKeys>
      </Pane>
    );
  }
}

export default Configuration;

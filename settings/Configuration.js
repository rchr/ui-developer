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
    stripes: PropTypes.shape({
      logger: PropTypes.shape({
        log: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static contextTypes = {
    stripes: PropTypes.object.isRequired,
  };

  onChange(e) {
    const stripes = this.context.stripes;
    const cat = e.target.value;
    stripes.logger.categories = cat;
    stripes.logger.log('action', `changed logging categories to '${cat}'`);
    this.forceUpdate();
  }

  render() {
    const stripes = this.context.stripes;

    const globalKeyMap = {
      stripesHome: 'command+up',
      stripesAbout: 'command+down',
    };

    const handlers = {
      'stripesHome': () => {
        console.log('handler for stripesHome: going to /');
        this.props.history.push('/');
      },
      'stripesAbout': () => {
        console.log('handler for stripesAbout: going to /about');
        this.props.history.push('/about');
      }
    };

    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <Row>
         <HotKeys keyMap={globalKeyMap} handlers={handlers}>
          <Col xs={12}>
            <label htmlFor="setting">Logging categories</label>
            <TextField value={stripes.logger.categories} onChange={e => this.onChange(e)} />
          </Col>
         </HotKeys>
        </Row>
      </Pane>
    );
  }
}

export default Configuration;

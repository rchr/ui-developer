// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
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

  onChange(e) {
    const stripes = this.props.stripes;
    const cat = e.target.value;
    stripes.logger.categories = cat;
    stripes.logger.log('action', `changed logging categories to '${cat}'`);
    this.forceUpdate();
  }

  render() {
    const stripes = this.props.stripes;
    console.log(stripes);

    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <Row>
          <Col xs={12}>
            <label htmlFor="setting">Logging categories</label>
            <TextField value={stripes.logger.categories} onChange={e => this.onChange(e)} />
          </Col>
        </Row>
      </Pane>
    );
  }
}

export default Configuration;

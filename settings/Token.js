import React, { PropTypes } from 'react';
import Pane from '@folio/stripes-components/lib/Pane';
import { Entry } from './Configuration';

class Token extends React.Component {
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
    stripes.setToken(e.target.value);
    // this.forceUpdate();
  }

  render() {
    const stripes = this.props.stripes;

    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <Entry
          htmlFor="1"
          caption="Authentication token (JWT)"
          value={stripes.store.getState().okapi.token}
          onChange={e => this.onChange(e)}
        />
      </Pane>
    );
  }
}

export default Token;

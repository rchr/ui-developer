import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from '@folio/stripes-components/lib/HotKeys';
import Pane from '@folio/stripes-components/lib/Pane';
import { withStripes } from '@folio/stripes-core/src/StripesContext';

function TestHotkeys(props) {
  const handlers = {
    stripesHome: () => {
      props.stripes.logger.log('action', 'handler for stripesHome: going to /');
      props.history.push('/');
    },
    stripesAbout: () => {
      props.stripes.logger.log('action', 'handler for stripesAbout: going to /about');
      props.history.push('/about');
    },
  };

  const bindings = props.stripes.bindings || {};
  return (
    <HotKeys handlers={handlers} noWrapper>
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={props.label}>
        <p>
          When this area is focused, type:
        </p>
        <ul>
          <li><tt>{bindings.stripesHome || '[undefined]'}</tt> to go to the Home page</li>
          <li><tt>{bindings.stripesAbout || '[undefined]'}</tt> to go to the About page</li>
        </ul>
      </Pane>
    </HotKeys>
  );
}

TestHotkeys.propTypes = {
  label: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  stripes: PropTypes.shape({
    bindings: PropTypes.shape({
      stripesAbout: PropTypes.string,
      stripesHome: PropTypes.string,
    }),
    logger: PropTypes.shape({
      log: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStripes(TestHotkeys);

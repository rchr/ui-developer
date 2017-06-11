// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React, { PropTypes } from 'react';
import { HotKeys } from '@folio/stripes-components/lib/HotKeys';
import Pane from '@folio/stripes-components/lib/Pane';

function TestHotkeys(props, context) {
  const globalKeyMap = {
    stripesHome: 'command+up',
    stripesAbout: 'command+down',
  };

  const handlers = {
    stripesHome: () => {
      context.stripes.logger.log('action', 'handler for stripesHome: going to /');
      props.history.push('/');
    },
    stripesAbout: () => {
      context.stripes.logger.log('action', 'handler for stripesAbout: going to /about');
      props.history.push('/about');
    },
  };

  return (
    <HotKeys keyMap={globalKeyMap} handlers={handlers} noWrapper>
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={props.label}>
        <p>
          When this area is focussed, type:
        </p>
        <ul>
          <li><tt>command+up</tt> to go to the Home page</li>
          <li><tt>command+down</tt> to go to the About page</li>
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
};

TestHotkeys.contextTypes = {
  stripes: PropTypes.shape({
    logger: PropTypes.shape({
      log: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TestHotkeys;

// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React, { PropTypes } from 'react';
import Pane from '@folio/stripes-components/lib/Pane';
import Pluggable from '@folio/stripes-components/lib/Pluggable';

function TestPlugin(props) {
  return (
    <Pane defaultWidth="fill" fluidContentWidth paneTitle={props.label}>
      <Pluggable type="markdown-editor">
        <div style={{ background: 'red' }}>[Markdown editor goes here]</div>
      </Pluggable>
    </Pane>
  );
}

TestPlugin.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TestPlugin;

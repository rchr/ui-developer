// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React, { PropTypes } from 'react';
import Link from 'react-router-dom/Link';
import Pane from '@folio/stripes-components/lib/Pane';
import Pluggable from '@folio/stripes-components/lib/Pluggable';

function TestPlugin(props) {
  return (
    <Pane defaultWidth="fill" fluidContentWidth paneTitle={props.label}>
      <div>
        <Pluggable type="markdown-editor">
          <div style={{ background: 'red' }}>[Markdown editor goes here]</div>
        </Pluggable>
        <p>To change the preferred plugin, go <Link to="/settings/organization/plugins">here</Link>.</p>
      </div>
    </Pane>
  );
}

TestPlugin.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TestPlugin;

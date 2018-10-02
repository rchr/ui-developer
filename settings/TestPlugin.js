import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { Pane } from '@folio/stripes/components';
import { Pluggable } from '@folio/stripes/core';

function TestPlugin(props) {
  return (
    <Pane defaultWidth="fill" fluidContentWidth paneTitle={props.label}>
      <div>
        <Pluggable type="markdown-editor">
          <div style={{ background: 'red' }}>[Markdown editor goes here]</div>
        </Pluggable>
        <p>
          To change the preferred plugin, go
          {' '}
          <Link to="/settings/organization/plugins">here</Link>
          .
        </p>
      </div>
    </Pane>
  );
}

TestPlugin.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TestPlugin;

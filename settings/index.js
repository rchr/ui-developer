// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import Settings from '@folio/stripes-components/lib/Settings';

import Configuration from './Configuration';

const pages = [
  {
    route: 'configuration',
    label: 'Configuration',
    component: Configuration,
  },
];

export default props => <Settings {...props} pages={pages} />;

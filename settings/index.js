// We have to remove node_modules/react to avoid having multiple copies loaded.
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import Settings from '@folio/stripes-components/lib/Settings';

import Configuration from './Configuration';
import TestHotkeys from './TestHotkeys';

const pages = [
  {
    route: 'configuration',
    label: 'Configuration',
    component: Configuration,
  },
  {
    route: 'hotkeys',
    label: 'Hotkeys Test',
    component: TestHotkeys,
  },
];

export default props => <Settings {...props} pages={pages} />;

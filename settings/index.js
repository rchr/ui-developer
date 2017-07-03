import React from 'react';
import Settings from '@folio/stripes-components/lib/Settings';

import Configuration from './Configuration';
import TestHotkeys from './TestHotkeys';
import TestPlugin from './TestPlugin';

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
  {
    route: 'plugin',
    label: 'Plugin Test',
    component: TestPlugin,
  },
];

class DeveloperSettings extends React.Component {
  static actionNames = ['stripesHome', 'stripesAbout'];

  render() {
    return <Settings {...this.props} pages={pages} paneTitle="Developer" />;
  }
}

export default DeveloperSettings;

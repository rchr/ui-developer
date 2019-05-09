import React from 'react';
import { hot } from 'react-hot-loader';
import { FormattedMessage } from 'react-intl';

import { Settings } from '@folio/stripes/smart-components';

import Configuration from './Configuration';
import Locale from './Locale';
import TestHotkeys from './TestHotkeys';
import Token from './Token';

const pages = [
  {
    route: 'configuration',
    label: <FormattedMessage id="ui-developer.configuration" />,
    component: Configuration,
  },
  {
    route: 'hotkeys',
    label: <FormattedMessage id="ui-developer.hotkeys" />,
    component: TestHotkeys,
  },
  {
    route: 'token',
    label: <FormattedMessage id="ui-developer.setToken" />,
    component: Token,
  },
  {
    route: 'locale',
    label: <FormattedMessage id="ui-developer.sessionLocale" />,
    component: Locale,
  },
];

class DeveloperSettings extends React.Component {
  static actionNames = ['stripesHome', 'stripesAbout'];

  render() {
    return <Settings {...this.props} pages={pages} paneTitle={<FormattedMessage id="ui-developer.meta.title" />} />;
  }
}

export default hot(module)(DeveloperSettings);

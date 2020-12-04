import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import TemplatesDisplay from './TemplatesDisplay';

class Templates extends React.Component {
  static propTypes = {
    resources: PropTypes.shape({
      entries: PropTypes.object,
    }).isRequired,
    mutator: PropTypes.shape({
      entries: PropTypes.object,
      recordId: PropTypes.object,
    }),
  };

  static manifest = Object.freeze({
    recordId: {},
    entries: {
      type: 'okapi',
      records: 'templates',
      path: 'templates',
      GET: {
        path: 'templates',
        params: {
          query: 'cql.allRecords=1 sortby module description',
          limit: '1000',
        },
      },
    },
  });

  render() {
    const entries = (this.props.resources.entries || {}).records || [];

    if (entries.length) {
      return <TemplatesDisplay entries={entries} />;
    } else {
      return <div><FormattedMessage id="ui-developer.templates.loading" /></div>;
    }
  }
}

export default injectIntl(Templates);

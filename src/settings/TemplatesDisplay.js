import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import { Headline, Modal, MultiColumnList, Pane, Row } from '@folio/stripes/components';

const TemplatesDisplay = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [template, setTemplate] = useState({});
  const intl = useIntl();

  const formatter = {
    description: o => o.description,
    outputFormats: o => o.outputFormats.join(', '),
    templateResolver: o => o.templateResolver,
  };

  const handleRowClick = (e, i) => {
    setIsModalVisible(true);
    setTemplate(i);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const displayTemplate = (t) => {
    const l = [];
    let locale;
    for (locale in t.localizedTemplates) {
      if (Object.prototype.hasOwnProperty.call(t.localizedTemplates, locale)) {
        const content = [
          { key: 'header', val: t.localizedTemplates[locale].header },
          { key: 'body', val: t.localizedTemplates[locale].body },
        ];

        l.push(<Headline size="medium">{intl.formatMessage({ id: 'ui-developer.templates.locale' }, { locale })}</Headline>);
        l.push(<MultiColumnList
          contentData={content}
          visibleColumns={['key', 'val']}
          columnWidths={{
            key: '20%',
            val: '80%',
          }}
        />);
      }
    }

    return l;
  };

  return (
    <Pane
      defaultWidth="fill"
      paneTitle={<FormattedMessage id="ui-developer.templates" />}
    >
      <Row>
        <MultiColumnList
          contentData={props.entries}
          visibleColumns={['description', 'outputFormats', 'templateResolver']}
          formatter={formatter}
          onRowClick={handleRowClick}
        />
      </Row>
      <Modal
        dismissible
        closeOnBackgroundClick
        open={isModalVisible}
        label={template?.description}
        onClose={handleModalClose}
      >
        {displayTemplate(template)}
      </Modal>
    </Pane>
  );
};

TemplatesDisplay.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default TemplatesDisplay;

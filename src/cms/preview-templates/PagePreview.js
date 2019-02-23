import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'

const PagePreview = ({ entry, widgetFor, widgetsFor }) => (
  <PageTemplate
    title={widgetFor('title')}
    hero={widgetFor('hero')}
    content={widgetsFor('content')}
    links={widgetsFor('links')}
  />
)

export default PagePreview

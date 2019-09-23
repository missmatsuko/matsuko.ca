import React from 'react'
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

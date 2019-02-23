import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project'

const ProjectPreview = ({ entry, widgetFor, widgetsFor }) => (
  <ProjectTemplate
    title={widgetFor('title')}
    links={widgetsFor('links')}
    technologies={widgetsFor('technologies')}
    hero={widgetFor('hero')}
    content={widgetFor('body')}
  />
)

export default ProjectPreview

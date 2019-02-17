import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

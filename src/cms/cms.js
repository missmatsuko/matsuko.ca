import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

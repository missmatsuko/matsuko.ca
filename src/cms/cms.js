import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

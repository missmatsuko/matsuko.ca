import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ProjectsListing from '../components/ProjectsListing'

export const ProjectsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>{title}</h1>
      <div className="container">
        <ProjectsListing />
      </div>
    </section>
  )
}

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

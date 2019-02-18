import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

// Page builder components
import ProjectsListing from '../components/ProjectsListing'
import {MDContent} from '../components/Content'

export const PageTemplate = ({
  helmet,
  title,
  description,
  content,
  links
}) => {
  return (
    <section>
      {helmet || ''}
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        {content && (content.map((block, index) => {
          switch (block.type) {
            case 'ProjectsListing':
              return <ProjectsListing key={index} />;
            case 'Body':
              return <MDContent key={index} content={block.body} />;
            default:
              return null;
          }
        }))}
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.frontmatter.content}
        helmet={
          <Helmet
            titleTemplate="%s | Pages"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Page

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        content {
          type
          body
        }
      }
    }
  }
`

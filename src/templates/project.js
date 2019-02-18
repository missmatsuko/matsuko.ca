import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProjectTemplate = ({
  helmet,
  title,
  description,
  content,
  contentComponent,
  links
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
      <div className="container">
        <div>
          <h1>
            {title}
          </h1>
          <p>{description}</p>
        </div>
        <div>
          <PostContent content={content} />

          {links && (
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        links={post.frontmatter.links}
        helmet={
          <Helmet
            titleTemplate="%s | Projects"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        links {
          text
          url
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Box, Flex } from '@rebass/grid'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

export const ProjectTemplate = ({
  helmet,
  title,
  description,
  content,
  links,
  technologies
}) => {

  return (
    <section>
      {helmet || ''}
      <Hero headline={title} description={description} />

      <Container>
        <Flex flexWrap="wrap" mx={[-10, -20]} flexDirection={['column-reverse','row']}>
          <Box p={[10,20]} width={[1, 2/3, 3/4]}>
            <HTMLContent content={content} />
          </Box>

          <Box p={[10,20]} width={[1, 1/3, 1/4]}>
            <Sidebar>
              {links && (
                <>
                  <h2>Links</h2>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {technologies && (
                <>
                  <h2>Technologies</h2>
                  <ul>
                    {technologies.map((technology, index) => (
                      <li key={index}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Sidebar>
          </Box>
        </Flex>

      </Container>
    </section>
  )
}

ProjectTemplate.propTypes = {
  helmet: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node.isRequired,
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectTemplate
        content={post.html}
        description={post.frontmatter.description}
        links={post.frontmatter.links}
        technologies={post.frontmatter.technologies}
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
        technologies
      }
    }
  }
`

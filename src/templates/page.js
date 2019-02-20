import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Hero from '../components/Hero'

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
      <Hero headline={title} description={description} />

      <Container>
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
      </Container>
    </section>
  )
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
            titleTemplate="%s"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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

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
  title,
  hero,
  content
}) => {
  return (
    <section>
      <Hero
        headline={hero.headline || title}
        subheadline={hero.subheadline}
        body={hero.body}
      />

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
      <Helmet
        titleTemplate="%s | Matsuko Friedland"
      >
        <title>{`${post.frontmatter.seo.title || post.frontmatter.title}`}</title>

        {post.frontmatter.seo.description && (
          <meta name="description" content={`${post.frontmatter.seo.description}`} />
        )}
      </Helmet>

      <PageTemplate
        title={post.frontmatter.title}
        hero={post.frontmatter.hero}
        content={post.frontmatter.content}
        links={post.frontmatter.links}
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
        seo {
          title
          description
        }
        hero {
          headline
          subheadline
          body
        }
        content {
          type
          body
        }
        links {
          text
          url
        }
      }
    }
  }
`

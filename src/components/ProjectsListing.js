import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Grid from '../components/Grid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ProjectsListingItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  position: relative;

  a {
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

  .image {
    background-color: gray;
  }

  .text {
    display: block;
    padding: 10px;
  }

  .title {
    margin: 0;
  }

  .category {
    margin: 0;
  }
`

class ProjectsListing extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Grid columns={4} gutter="10px">
        {posts && (posts
          .map(({ node: post }) => (
            <ProjectsListingItem key={post.id}>
              <Link to={post.fields.slug} className="text">
                <h3 className="title">{post.frontmatter.title}</h3>
                <p className="category">{post.frontmatter.projectType}</p>
              </Link>
              <div className="image">
                <PreviewCompatibleImage imageInfo={post.frontmatter.thumbnail} />
              </div>
            </ProjectsListingItem>
        )))}
      </Grid>
    );
  }
}

ProjectsListing.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query ProjectsListingQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "project" } }}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              projectType
              thumbnail {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <ProjectsListing data={data} count={count} />
    )}
  />
)

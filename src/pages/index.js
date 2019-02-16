import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentTile from '../components/ContentTile'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="container">
          <h1>Matsuko Friedland</h1>
          <p>[<strong>ˈma</strong>.t͡sɯ̥.ko <strong>ˈfɹiːd</strong>.lənd]</p>
          <ol>
            <li>Web Developer at <a href="https://tribalworldwide.ca/" target="_blank" rel="nofollow noreferrer">Tribal Worldwide/DDB</a>, Vancouver. (September 2018 - Present)</li>
            <li>Honours graduate of <a href="https://www.vanarts.com/programs/web-development-interactive-design/" target="_blank" rel="nofollow noreferrer">VanArts' Web Development and Interactive Design program.</a> (August 2016)</li>
            <li>A unique individual who enjoys eating, coding, and learning.</li>
          </ol>
          <small>
            See also: <a href="https://www.linkedin.com/in/matsuko/" target="_blank" rel="nofollow noreferrer">LinkedIn</a>, <a href="https://github.com/missmatsuko" target="_blank" rel="nofollow noreferrer">GitHub</a>, <a href="https://codepen.io/missmatsuko/" target="_blank" rel="nofollow noreferrer">CodePen</a>
          </small>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

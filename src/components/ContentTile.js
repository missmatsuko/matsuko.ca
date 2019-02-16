import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const ContentTileBase = styled.div`
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: auto;
  }
`;

const ContentTile = ({post}) => (
  <ContentTileBase key={post.id}>
    <img src="https://placeimg.com/300/300/any" alt="" />
    <h3>{post.frontmatter.title}</h3>
    <p>Small description</p>
    <Link className="button is-small" to={post.fields.slug}>
      More Details
    </Link>
  </ContentTileBase>
)

ContentTile.propTypes = {
}

export default ContentTile

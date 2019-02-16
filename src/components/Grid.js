import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GridItem = styled.div`
  display: flex;
  padding: ${props => props.gutter ? props.gutter : 0};
  width: ${props => props.columns ? 1 / props.columns * 100 : 100}%;

  & > * {
    width: 100%;
  }
`

const Grid = styled(({ className, gutter, columns, children }) => (
  <div className={className}>
    {children.map(child => (
      <GridItem key={child.key} columns={columns} gutter={gutter}>
        {child}
      </GridItem>
    ))}
  </div>
))`
  display: flex;
  flex-wrap: wrap;
  margin: -${props => props.gutter ? props.gutter : 0};
`;

Grid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Grid

import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '@rebass/grid'
import { MDContent } from '../components/Content'
import Container from '../components/Container'

const Hero = styled(({ className, headline, subheadline, body }) => (
  <div className={className} tall={!!body}>
    <Container className="inner" width="100%">
      <Box width={body ? [1] : [1, 1/2]}>
        <h1>{headline}</h1>
        {subheadline && <p>{subheadline}</p>}
        {body && <MDContent className="body" content={body}/>}
      </Box>
    </Container>
  </div>
))`
  display: flex;
  align-items: flex-end;
  padding: 40px 0;
  min-height: 300px;
  background-color: black;
  color: white;
  margin-bottom: 60px;

  ul, ol {
    margin: 0;
    padding: 0;
    margin: 2rem 0 2rem 1rem;
  }

  hr {
    border: 1px solid currentColor;
    width: 4rem;
    margin: 2rem 0;
  }

  .body {
    margin-top: 1rem;
  }

  ${props => props.body && css`
    color: black;
    background-color: white;
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
  `}
`;

export default Hero

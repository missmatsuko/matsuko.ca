import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import Container from '../components/Container'

const Hero = styled(({ className, headline, description }) => (
  <div className={className}>
    <Container className="inner" width="100%">
      <Box width={[1, 1/2]}>
        <h1>{headline}</h1>
        {description && <p>{description}</p>}
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
`;

export default Hero

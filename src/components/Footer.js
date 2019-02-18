import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/Container'

const Footer = styled(({ className }) => (
  <footer className={className}>
    <Container>
      <small>made by matsuko (<a href="mailto:info@matsuko.ca">info@matsuko.ca</a>)</small>
    </Container>
  </footer>
))`
  text-align: right;
  background-color: #eee;
  padding: 10px;
  margin-top: auto;
`;


export default Footer

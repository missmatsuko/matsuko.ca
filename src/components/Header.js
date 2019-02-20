import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Link from '../components/Link'

const HomeLink = styled(Link)`
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  text-decoration: none;
  line-height: 1;
`

const Nav = styled.nav`
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {

  }
  a {
    display: block;
    text-decoration: none;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    padding: 15px;
    transition: border-color 0.3s;

    &:hover {
      border-bottom-color: #ccc;
    }

    &.active {
      border-bottom-color: #ccc;
    }
  }
`

const NavItem = ({to, children}) => (
  <li>
    <Link to={to} activeClassName="active">
      {children}
    </Link>
  </li>
)

const Header = styled(({ className }) => (
  <header className={className}>
    <Container className="inner">
      <HomeLink to="/">
        m<span className="sr-only">atsuko</span>.<span className="sr-only">ca</span>
      </HomeLink>

      <Nav>
        <ul>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
        </ul>
      </Nav>
    </Container>
  </header>
))`
  background-color: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;


export default Header

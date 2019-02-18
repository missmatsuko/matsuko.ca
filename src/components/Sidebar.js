import React from 'react'
import styled from 'styled-components'

const Sidebar = styled(({ className, children }) => (
  <aside className={className}>
    {children}
  </aside>
))`
  font-size: 0.9rem;
  h2 {
    font-size: 0.8rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: -5px;
    margin-bottom: 30px;

    li {
      display: inline-block;
      margin: 5px;

      a {
        display: block;
        border: 1px solid black;
        padding: 5px 15px;
        border-radius: 100px;
        text-decoration: none;
        min-width: 4rem;
        text-align: center;

        &:hover {
          background-color: black;
          color: white;
          transition: 0.3s;
        }
      }
    }
  }
`;


export default Sidebar

import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, className, to, activeClassName, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        getProps={({ isCurrent, isPartiallyCurrent }) =>
          isCurrent || (isPartiallyCurrent && to !== '/') ? { className: `${className} ${activeClassName}`} : { className }
        }
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} className={className} {...other} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only">External link, opens in new tab.</span>
    </a>
  )
}

export default Link

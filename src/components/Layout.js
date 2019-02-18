import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../components/Header'

const theme = {
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #333;
    line-height: 1.3;
    font-family: 'Asap', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: 2px solid currentColor;
  }

  a {
    color: inherit;

    /*
      Don't skip underline for descenders on links by default.
      I think it makes it harder to tell where links start and end.
    */
    text-decoration-skip: none; // Safari
    text-decoration-skip-ink: none; // Chrome and Firefox
  }

  // Helper class to hide content visibly, but not for screenreaders
  .sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }
`

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
  	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
  	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

  	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
  	        <meta name="theme-color" content="#fff" />

  	        <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
            <link href="https://fonts.googleapis.com/css?family=Asap:400,700" rel="stylesheet" />
          </Helmet>

          <Header />

          <main>
            {children}
          </main>

          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
)

export default TemplateWrapper

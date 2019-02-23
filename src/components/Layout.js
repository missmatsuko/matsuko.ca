import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const theme = {
}

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #___gatsby>div {
    min-height: 100%
  }

  #___gatsby>div {
    display: flex;
    flex-direction: column;
  }

  body {
    margin: 0;
    background-color: white;
    color: #333;
    line-height: 1.8;
    font-family: 'Asap', sans-serif;
  }

  main {
    padding-bottom: 100px;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: 2px solid currentColor;
  }

  h1 {
    font-size: 2.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1;

    &:not(:first-child) {
      margin-top: 40px;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  p {
    margin: 0;

    & + p {
      margin-top: 10px;
    }
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
            <link href="https://fonts.googleapis.com/css?family=Asap:400,700" rel="stylesheet" />
          </Helmet>

          <Header />

          <main>
            {children}
          </main>

          <Footer />

          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
)

export default TemplateWrapper

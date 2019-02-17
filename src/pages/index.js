import React from 'react'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1>Matsuko Friedland</h1>
          <p>[<strong>ˈma</strong>.t͡sɯ̥.ko <strong>ˈfɹiːd</strong>.lənd]</p>
          <ol>
            <li>Web Developer at <a href="https://tribalworldwide.ca/" target="_blank" rel="noopener noreferrer">Tribal Worldwide/DDB</a>, Vancouver. (September 2018 - Present)</li>
            <li>Honours graduate of <a href="https://www.vanarts.com/programs/web-development-interactive-design/" target="_blank" rel="noopener noreferrer">VanArts' Web Development and Interactive Design program.</a> (August 2016)</li>
            <li>A unique individual who enjoys eating, coding, and learning.</li>
          </ol>
          <small>
            See also: <a href="https://www.linkedin.com/in/matsuko/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/missmatsuko" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://codepen.io/missmatsuko/" target="_blank" rel="noopener noreferrer">CodePen</a>
          </small>
        </div>
      </Layout>
    )
  }
}

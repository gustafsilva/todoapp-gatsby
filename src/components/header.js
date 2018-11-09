import React from 'react'
import { siteMetadata } from '../../gatsby-config'

/**
 * Component responsible for the Header of the app, will contain
 * information about the author, image and external links.
 */
const Header = () => {
  /* Capturing information about the title and description of the site. */
  const { title, description } = siteMetadata

  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{description}</h2>
        </div>
      </div>
    </section>
  )
}

export default Header

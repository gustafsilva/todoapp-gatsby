import React, { Component } from "react";
import { siteMetadata } from "../../gatsby-config";

class Header extends Component {
  render() {
    const { title, description } = siteMetadata;

    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{description}</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
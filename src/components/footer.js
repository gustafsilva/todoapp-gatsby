import React, { Component } from "react";
import { FaHeart, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <p>
            <a className="icon" href="#"><FaGithub /></a><strong>TodoApp</strong> by <a href="#">Gustavo F. Silva</a>.
            The source code is licensed <a href="#">MIT</a><i className="icon has-text-danger"><FaHeart /></i>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
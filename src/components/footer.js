import React, { Component } from "react";
import { FaHeart, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <p>
            <a className={'icon'} href="www.github.com.br/gustafsilva/todoapp-gatsby"><FaGithub /></a><strong>TodoApp</strong> by <a href="www.github.com/gustafsilva">Gustavo F. Silva</a>.
            The source code is licensed <a href="#">MIT</a><i className="icon has-text-danger"><FaHeart /></i>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
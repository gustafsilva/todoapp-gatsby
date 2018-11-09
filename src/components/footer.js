import React from 'react'
import { FaHeart, FaGithub } from 'react-icons/fa'

/**
 * Component responsible for the Footer, contains general information
 * about the site and code such as license add external links to the
 * project and author.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p>
          <a className={'icon'} href="https://www.github.com/gustafsilva/todoapp-gatsby"><FaGithub />

          </a><strong>TodoApp</strong> by <a href="https://www.github.com/gustafsilva">Gustavo F. Silva</a>.

            The source code is licensed<a href="https://github.com/gustafsilva/todoapp-gatsby/blob/master/LICENSE"> MIT</a>
          <i className="icon has-text-danger"><FaHeart /></i>
        </p>
      </div>
    </footer>
  )
}

export default Footer

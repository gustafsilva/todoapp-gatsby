import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import TodoApp from '../components/todoapp'
import Footer from '../components/footer'

import { siteMetadata } from '../../gatsby-config'

import style from '../sass/style.scss' // eslint-disable-line no-unused-vars

export default () => {
  const { title, description } = siteMetadata
  const fullTitle = `${ title } | ${ description }`

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: description }]}
        title={fullTitle}
      />
      <div className="has-text-centered">
        <Header />

        <TodoApp />

        <Footer />
      </div>
    </Fragment>
  )
}

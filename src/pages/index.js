import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'

import Header from '../components/header'
import TodoApp from '../components/todoapp'
import Footer from '../components/footer'

import { siteMetadata } from '../../gatsby-config'
import store from '../containers/store'

import style from '../sass/style.scss' // eslint-disable-line no-unused-vars

/**
 * Component responsible for rendering the entire app screen.
 */
const App = () => {
  /* Capturing information about the title and description of the site. */
  const { title, description } = siteMetadata
  /* Creating full title for browser screen (meta). */
  const fullTitle = `${ title } | ${ description }`

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App

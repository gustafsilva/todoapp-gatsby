import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'

import Header from '../components/header'
import TodoApp from '../components/todoapp'
import Footer from '../components/footer'

import { siteMetadata } from '../../gatsby-config'
import store from '../containers/store'

import style from '../sass/style.scss' // eslint-disable-line no-unused-vars

const App = () => {
  const { title, description } = siteMetadata
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

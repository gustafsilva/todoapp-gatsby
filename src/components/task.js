import React, { Component } from 'react'

export default class Task extends Component {
  renderButton () {
    let button

    if (this.props.status) {
      button = <a className="button" href="#">{this.props.description}</a>
    } else {
      button = <a className="button has-text-dangered" href="#">{this.props.description}</a>
    }

    return (button)
  }

  render () {
    return (
      <p className="task control">
        {this.renderButton()}
      </p>
    )
  }
}

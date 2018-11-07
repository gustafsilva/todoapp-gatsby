import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as taskActions from '../containers/actions/tasks'

class Task extends Component {
  constructor (props) {
    super(props)

    this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus () {
    this.props.changeTaskStatus(this.props.id)
  }

  renderButton () {
    let button

    if (this.props.status) {
      button = <a className="button is-success" href="#"><strike>{this.props.description}</strike></a>
    } else {
      button = <a className="button" href="#">{this.props.description}</a>
    }

    return (button)
  }

  render () {
    return (
      <p className="task control" key={this.props.key} onClick={this.changeStatus}>
        {this.renderButton()}
      </p>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Task)

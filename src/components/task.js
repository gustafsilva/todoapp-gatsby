import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as taskActions from '../containers/actions/tasks'

/**
 * Component responsible for a specific task, which has a description
 * and status (whether complete or not).
 */
class Task extends Component {
  /**
   * Create a task.
   * @param {Object} props - Props passed by the parent component.
   */
  constructor (props) {
    super(props)

    this.changeStatus = this.changeStatus.bind(this)
  }

  /**
   * Change the status of a task.
   * If false change to true, if true change to false.
   */
  changeStatus () {
    /* Request action to change status of a task, past task id as argument */
    this.props.changeTaskStatus(this.props.id)
  }

  /**
   * Render the task button according with status of the task.
   */
  renderButton () {
    let button

    if (this.props.status) {
      /* If the task is complete */
      button = <a className="button is-danger" href="#"><strike>{this.props.description}</strike></a>
    } else {
      /* If the task isn't complete */
      button = <a className="button" href="#">{this.props.description}</a>
    }

    return (button)
  }

  /**
   * Method responsible for rendering the task, calls the metho to render the button,
   * and cretes the actions if the user clicks a task.
   */
  render () {
    return (
      <p className="task control" key={this.props.key} onClick={this.changeStatus}>
        {this.renderButton()}
      </p>
    )
  }
}

/* Function responsible for mapping the states (store) to the props of task. */
const mapStateToProps = state => ({
  tasks: state.tasks
})

/* Function responsible for mapping the dispatch (actions) to the props of task. */
const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch)

/* Exporting task, and connecting it with mapping to states and dispatch. */
export default connect(mapStateToProps, mapDispatchToProps)(Task)

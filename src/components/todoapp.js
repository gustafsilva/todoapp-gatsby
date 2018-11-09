import React, { Component } from 'react'

import Task from './task'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as taskActions from '../containers/actions/tasks'

/**
 * Component responsible for rendering ToDo application.
 * Tasks can be added and marked as complete or not complete.
 */
class TodoApp extends Component {
  /**
   * Create a TodoApp.
   * @param {Object} props - Props passed by the parent component.
   */
  constructor (props) {
    super(props)

    this.state = {
      newTask: '',
    }

    this.changeNewTask = this.changeNewTask.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  /**
   * Method responsible for updating the status value of a new task
   * or adding a new task.
   * @param {Object} event - Event that generated called the method.
   */
  changeNewTask (event) {
    if (event.key === 'Enter') {
      /* If you enter the 'enter' */
      this.addTask()
    } else {
      /* If you do not enter the 'enter' key */
      this.setState({
        ...this.state,
        newTask: event.target.value
      })
    }
  }

  /**
   * Method responsible for activating action for new task.
   */
  addTask () {
    /* Capture the new state of the updated task */
    const { newTask } = this.state

    if (newTask !== '') {
      /* If the new task is not empty */
      this.props.addTask(newTask)

      this.setState({
        newTask: '',
      })
    }
  }

  /**
   * Method responsible for rendering the TodoApp.
   * Creates mechanisms to list and create tasks.
   */
  render () {
    return (
      <div className="todoapp content">
        <div className="new-task form field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Add new task"
              value={this.state.newTask}
              onChange={this.changeNewTask}
              onKeyPress={this.changeNewTask}
            />
          </div>
          <div className="control">
            <button className="button is-success" onClick={this.addTask}>Add</button>
          </div>
        </div>

        <div className="tasks field is-grouped is-grouped-multiline">
          {
            this.props.tasks.map(task => (
              <Task key={task.id} id={task.id} description={task.description} status={task.status} />
            ))
          }
        </div>
      </div>
    )
  }
}

/* Function responsible for mapping the states (store) to the props of TodoApp. */
const mapStateToProps = state => ({
  tasks: state.tasks
})

/* Function responsible for mapping the dispatch (actions) to the props of TodoApp. */
const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch)

/* Exporting TodoApp, and connecting it with mapping to states and dispatch. */
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

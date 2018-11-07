import React, { Component } from 'react'

import Task from './task'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as taskActions from '../containers/actions/tasks'

class TodoApp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newTask: '',
    }

    this.setNewTask = this.setNewTask.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  setNewTask (event) {
    if (event.key === 'Enter') {
      this.addTask()
    } else {
      this.setState({
        ...this.state,
        newTask: event.target.value
      })
    }
  }

  addTask () {
    const { newTask } = this.state

    if (newTask !== '') {
      this.props.addTask(newTask)

      this.setState({
        newTask: '',
      })
    }
  }

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
              onChange={this.setNewTask}
              onKeyPress={this.setNewTask}
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

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)

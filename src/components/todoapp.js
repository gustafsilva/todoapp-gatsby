import React, { Component } from "react";

import Task from "./task";


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      tasks: []
    };

    this.setNewTask = this.setNewTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  setNewTask(event) {
    if (event.key == "Enter") {
      this.addTask();
    }
    else {
      this.setState({
        ...this.state,
        newTask: event.target.value
      });
    }
  }

  addTask() {
    const { newTask } = this.state;
    let { tasks } = this.state;

    if(newTask !== "") {
      const task = {
        description: this.state.newTask,
        status: false
      }
      tasks.push(task);
  
      this.setState({
        newTask: "",
        tasks
      });
    }
  }

  renderTasks() {
    const { tasks } = this.state;

    const tasksRendered = tasks.map((task) => {
      return (
        <Task description={task.description} status={tasks.status} />
      )
    });

    return (
      tasksRendered
    );
  }

  render() {
    return (
      <div className="todoapp content">
        <div className="new-task form field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Add new task" value={this.state.newTask} onChange={this.setNewTask} onKeyPress={this.setNewTask}></input>
          </div>
          <div className="control">
            <button className="button is-success" onClick={this.addTask}>Add</button>
          </div>
        </div>

        <div className="tasks field is-grouped is-grouped-multiline">
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

export default TodoApp;
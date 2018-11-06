import React, { Component } from "react";
import Task from "./task";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    let { tasks } = this.state;

    const task = {
      description: this.state.newTask,
      status: false
    }
    tasks.push(task);

    this.setState((state) => {
      return {
        newTask: "",
        tasks
      }
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="todoapp content">
        <div className="new-task field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Add new task" ></input>
          </div>
          <div className="control">
            <button className="button is-success" type="submit" onClick={this.addTask}>Add</button>
          </div>
        </div>

        <div className="tasks field is-grouped is-grouped-multiline">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    );
  }
}

export default TodoApp;
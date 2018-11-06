import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    let button;
    console.log(this.props.status);
    if(this.props.status) {
      button = <a className="button">{this.props.description}</a>
    }
    else {
      button = <a className="button has-text-dangered">{this.props.description}</a>
    } 
    
    return( button );
  }

  render() {
    return(
      <p className="task control">
        { this.renderButton() }
      </p>
    );
  }
}

export default Task;
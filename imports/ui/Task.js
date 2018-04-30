import React, { Component } from 'react';
import classnames from 'classnames';

import { remove, setChecked, setPrivate } from '../api/tasks/methods';

class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    setChecked.call({
      taskId: this.props.task._id,
      setChecked: !this.props.task.checked
    });
  }
 
  deleteThisTask() {
    remove.call({
      taskId: this.props.task._id
    });
  }

  togglePrivate() {
    setPrivate.call({
      taskId: this.props.task._id,
      setToPrivate: !this.props.task.private
    },
      () => console.log('toggle private'));
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });
 
    return (
      <li className={taskClassName}>
        { this.props.isOwner && (
          <React.Fragment>
            <button className="delete" onClick={this.deleteThisTask.bind(this)}>
              &times;
            </button>
    
            <input
              type="checkbox"
              readOnly
              checked={!!this.props.task.checked}
              onClick={this.toggleChecked.bind(this)}
            />

          
            <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
              { this.props.task.private ? 'Private' : 'Public' }
            </button>
          </React.Fragment>
        ) }

        <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
      </li>
    );
  }
}

// Task component - represents a single todo item
export default Task;
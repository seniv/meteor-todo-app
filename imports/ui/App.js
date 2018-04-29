import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Tasks } from '../api/tasks.js';

import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    const filteredTasks = this.state.hideCompleted
      ? this.props.tasks.filter(task => !task.checked)
      : this.props.tasks;
    
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const isOwner = task.owner === currentUserId;
  
      return (
        <Task
          key={task._id}
          task={task}
          isOwner={isOwner}
        />
      );
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = findDOMNode(this.refs.textInput).value.trim();
 
    Meteor.call('tasks.insert', text);
 
    // Clear form
    findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    console.log('isLoading', this.props.isLoading)
    console.log('currentUser', this.props.currentUser)
    console.log('tasks', this.props.tasks)
    console.log('incompleteCount', this.props.incompleteCount)
    console.log('----------------------------------------')
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

          {this.props.currentUser && (
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form>
          )}
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
};

const withData = withTracker(() => {
  const handler = Meteor.subscribe('tasks');

  console.log('track')

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    isLoading: !handler.ready()
  }
});

export default withData(App);
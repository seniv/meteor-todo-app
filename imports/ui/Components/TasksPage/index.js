import React from 'react';
import { compose, withProps, withState, withHandlers, branch, renderComponent } from 'recompose';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../../../api/tasks/tasks';
import { insert } from '../../../api/tasks/methods';
import Component from './Component';
import formData from '../../utils/formData';
import Loader from '../Loader/Component';

const withData = withTracker(() => {
  const handler = Meteor.subscribe('tasks');
  
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    isLoading: !handler.ready()
  }
});

const prepareTasks = props => (
  props.hideCompleted
    ? props.tasks.filter(task => !task.checked)
    : props.tasks
);

const enhance = compose(
  withData,
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(Loader)
  ),
  withState('hideCompleted', 'setHideCompleted', false),
  withHandlers({
    toggleHideCompleted: ({ setHideCompleted }) => () => setHideCompleted(hideCompleted => !hideCompleted),
    handleSubmit: () => (event) => {
      event.preventDefault();
      const text = formData(event).text.trim();
      insert.call({
        text
      });
      event.target.reset();
    }
  }),
  withProps(props => ({ tasks: prepareTasks(props) }))
);

export default enhance(Component);
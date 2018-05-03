import React from 'react';
import { withHandlers } from 'recompose';

import { remove, setChecked, setPrivate } from '../../../api/tasks/methods';
import Component from './Component';

const enhance = withHandlers({
  toggleChecked: ({ task }) => () => {
    setChecked.call({
      taskId: task._id,
      setChecked: !task.checked
    });
  },

  deleteThisTask: ({ task }) => () => {
    remove.call({
      taskId: task._id
    });
  },

  togglePrivate: ({ task }) => () => {
    setPrivate.call({
      taskId: task._id,
      setToPrivate: !task.private
    },
      () => console.log('toggle private'));
  },
});

export default enhance(Component);
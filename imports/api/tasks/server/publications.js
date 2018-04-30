import { Meteor } from 'meteor/meteor';
import { Tasks } from '../tasks';

Meteor.publish('tasks', function tasksPublication() {
  return Tasks.find({
    $or: [
      { private: { $ne: true } },
      { userId: this.userId },
    ],
  });
});
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Tasks } from './tasks';

export const insert = new ValidatedMethod({
  name: 'tasks.insert',
  validate: new SimpleSchema({
    text: String,
  }).validator(),
  run({ text }) {
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Tasks.insert({
      text,
      userId: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  }
});

export const remove = new ValidatedMethod({
  name: 'tasks.remove',
  validate: new SimpleSchema({
    taskId: {
      type: String,
      regEx: SimpleSchema.RegEx.id,
    },
  }).validator(),
  run({ taskId }) {
    const task = Tasks.findOne(taskId);

    if (!task.editableBy(this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
 
    Tasks.remove(taskId);
  }
});

export const setChecked = new ValidatedMethod({
  name: 'tasks.setChecked',
  validate: new SimpleSchema({
    taskId: {
      type: String,
      regEx: SimpleSchema.RegEx.id
    },
    setChecked: Boolean,
  }).validator(),
  run ({ taskId, setChecked }) {
    const task = Tasks.findOne(taskId);

    if (!task.editableBy(this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
 
    Tasks.update(taskId, { $set: { checked: setChecked } });
  }
});

export const setPrivate = new ValidatedMethod({
  name: 'tasks.setPrivate',
  validate: new SimpleSchema({
    taskId: {
      type: String,
      regEx: SimpleSchema.RegEx.id,
    },
    setToPrivate: Boolean,
  }).validator(),
  run({ taskId, setToPrivate }) {
    const task = Tasks.findOne(taskId);
 
    if (!task.editableBy(this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
 
    Tasks.update(taskId, { $set: { private: setToPrivate } });
  }
});
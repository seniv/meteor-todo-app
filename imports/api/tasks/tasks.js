import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

export const Tasks = new Mongo.Collection('tasks');

Tasks.schema = new SimpleSchema({
  text: String,
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  username: String,
  createdAt: {
    type: Date,
    defaultValue: new Date(),
  },
  private: {
    type: Boolean,
    defaultValue: true,
  },
  checked: {
    type: Boolean,
    defaultValue: false,
  },
});
Tasks.attachSchema(Tasks.schema);

Tasks.helpers({
  editableBy(userId) {
    return this.userId === userId;
  }
});
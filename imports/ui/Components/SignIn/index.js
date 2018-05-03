import React from 'react';
import { withHandlers, compose } from 'recompose';
import { Meteor } from 'meteor/meteor';
import { withInputs } from 'custom-hoc';

import Component from './Component';

const enhance = compose(
  withInputs({
    username: { validate: value => value.length > 3 && value.length <= 20 },
    password: { validate: value => value.length > 5 && value.length <= 20 },
  }),
  withHandlers({
    onSubmit: ({ history, username, password }) => (event) => {
      event.preventDefault();

      Meteor.loginWithPassword(username, password, error => {
        if(error) {
          alert(error.reason);
          return
        }
        history.push('/');
      });
    }
  })
);

export default enhance(Component);
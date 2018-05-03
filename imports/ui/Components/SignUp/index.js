import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withHandlers, compose } from 'recompose';
import { withInputs } from 'custom-hoc';

import Component from './Component';

const enhance = compose(
  withInputs({
    username: { validate: value => value.length > 3 && value.length <= 20 },
    email: { validate: value => value.length > 6 && value.length <= 30 },
    password: { validate: value => value.length > 5 && value.length <= 20 },
  }),
  withHandlers({
    onSubmit: ({ history, username, email, password }) => (event) => {
      event.preventDefault();

      Accounts.createUser({ username, email, password }, error => {
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
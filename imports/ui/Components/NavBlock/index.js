import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { compose, withHandlers } from 'recompose';

import Component from './Component';

const withData = withTracker(() => ({
  isLoggedIn: !!Meteor.user(),
  user: Meteor.user()
}));

const enhance = compose(
  withData,
  withHandlers({
    logoutHandler: () => () => {
      Meteor.logout()
    }
  })
);

export default enhance(Component);
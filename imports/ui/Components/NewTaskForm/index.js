import React from 'react';
import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';

import { insert } from '../../../api/tasks/methods';
import Component from './Component';

const enhance = compose(
  withInputs({
    text: { validate: value => value.length > 2 }
  }),
  withHandlers({
    handleSubmit: ({ text, onClear }) => (event) => {
      event.preventDefault();
      insert.call({
        text
      });
      onClear();
    }
  })
);

export default enhance(Component);
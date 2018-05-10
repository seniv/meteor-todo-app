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
    handleSubmit: ({ text, onChange }) => (event) => {
      event.preventDefault();
      insert.call({
        text
      });
      onChange('text')({ target: { value: ''}});
    }
  })
);

export default enhance(Component);
import React from 'react';
import styled from 'styled-components';

import StyledButton from '../Styled/Button';
import StyledInput from '../Styled/Input';

const Wrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const Input = StyledInput.extend`
  width: 100%;
  padding: 5px;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
`;

const NewTaskForm = ({ handleSubmit, text, onChange, submitReady }) => (
  <Wrapper>
    <Form onSubmit={handleSubmit}>
      <Input
        name="text"
        value={text}
        onChange={onChange('text')}
        placeholder="Type to add new tasks"/>
      <StyledButton disabled={!submitReady} type="submit">Add</StyledButton>
    </Form>
  </Wrapper>
);

export default NewTaskForm;
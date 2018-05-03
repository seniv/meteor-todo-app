import React from 'react';

import StyledButton from '../Styled/Button';
import StyledInput from '../Styled/Input';
import StyledHeader from '../Styled/Header';
import FormWrapper from '../Styled/FormWrapper';

const SignIn = ({ onSubmit, username, email, password, onChange, submitReady }) => (
  <FormWrapper>
    <form onSubmit={onSubmit}>
    <StyledHeader>Sign Up</StyledHeader>
      <StyledInput
        autoFocus
        name="username"
        placeholder="Username"
        value={username}
        onChange={onChange('username')}
      />
      <StyledInput
        autoFocus
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange('email')}
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChange('password')}
      />
      <StyledButton disabled={!submitReady} type="submit">Sign Up</StyledButton>
    </form>
  </FormWrapper>
);

export default SignIn;
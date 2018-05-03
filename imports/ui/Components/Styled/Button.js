import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  outline: none;
  background-color: #436cff;
  color: #fff;
  font-size: 18px;
  border: none;
  transition: .3s all;

  &:hover:not([disabled]) {
    box-shadow: 0px 5px 10px 0px #969696;
    cursor: pointer;
  }

  &:active {
    background-color: #1441e2;
  }

  &[disabled] {
    background-color: #e0e0e0;
    color: #000;
  }
`;

export default StyledButton;
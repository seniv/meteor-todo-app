import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #e64848;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const NotFound = ({ location }) => (
  <Wrapper>
    Page <strong>{location.pathname}</strong> not found!
  </Wrapper>
);

export default NotFound;
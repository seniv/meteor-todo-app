import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: yellow;
  padding: 15px;
  text-align: center;
`;

const Loader = () => (
  <Wrapper>
    Loading...
  </Wrapper>
);

export default Loader;
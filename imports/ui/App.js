import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';

import Routes from './Components/Routes/Component';
import NavBlock from './Components/NavBlock';

const RootWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
`;

const App = () => (
  <BrowserRouter>
    <RootWrapper>
      <NavBlock />

      <Routes />
    </RootWrapper>
  </BrowserRouter>
);

export default App;
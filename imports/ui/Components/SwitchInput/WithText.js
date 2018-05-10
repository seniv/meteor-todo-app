import React from 'react';
import styled from 'styled-components';

import SwitchInput from './Component';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;

  > span {
    margin-right: 10px;
    font-size: 16px;
  }
`;

const SwithWithText = ({children, ...rest}) => (
  <Wrapper>
    <span>{children}</span>
    <SwitchInput {...rest}/>
  </Wrapper>
);

export default SwithWithText;
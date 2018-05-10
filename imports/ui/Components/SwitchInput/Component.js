import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const CHECKED_COLOR = '#51bf4f';
const UNCHECKED_COLOR = '#ff6565';

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  transition: .4s;
  
  &:hover {
    box-shadow: 0px 5px 10px 0px #969696;
  }
`;

const Input = styled.input`
  display:none;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  background-color: ${props => props.checked ? props.checkedColor : props.uncheckedColor};
  border-radius: ${props => props.round ? '34px' : '0'};
  
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    transform: ${props => props.checked ? 'translateX(26px)' : 'none'};
    border-radius: ${props => props.round ? '50%' : '0'};
  }
`;


const SwitchInput = ({ onChange, ...rest }) => (
  <Wrapper>
    <Input type="checkbox" onChange={onChange} />
    <Slider {...rest}></Slider>
  </Wrapper>
);

SwitchInput.defaultProps = {
  round: false,
  checkedColor: CHECKED_COLOR,
  uncheckedColor: UNCHECKED_COLOR,
};

SwitchInput.propTypes = {
  onChange: T.func.isRequired,
  checked: T.bool.isRequired,
  round: T.bool,
  checkedColor: T.string,
  uncheckedColor: T.string,
};

export default SwitchInput;
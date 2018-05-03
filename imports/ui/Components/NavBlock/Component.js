import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  height: 35px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 5px 10px;
  background-color: #e4e4e4;
  color: #000;
  text-decoration: none;
  transition: .3s all;
  font-weight: bold;
  
  &:hover {
    box-shadow: 0px 5px 10px 0px #969696;
  }
  
  &:active {
    background-color: #cacaca;
  }
`.withComponent(Link);

const LeftBlock = styled.div`
  display: flex;
`;

const RightBlock = styled.div`
  display: flex;
  > ${LinkButton}:not(:last-child) {
    margin-right: 10px;
  }
`;

const UserInfo = styled.span`
  align-self: center;
  font-size: 19px;
  margin-right: 10px;
`;


const NavBlock = ({ isLoggedIn, user, logoutHandler }) => (
  <Wrapper>
    <LeftBlock>
      <LinkButton to="/">Todo List</LinkButton>
    </LeftBlock>

    <RightBlock>
      { isLoggedIn ? (
        <React.Fragment>
          <UserInfo>Welcome, {user.username}</UserInfo>
          <LinkButton to="" onClick={logoutHandler}>Logout</LinkButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LinkButton to="/signin">Sign In</LinkButton>
          <LinkButton to ="/signup">Sign Up</LinkButton>
        </React.Fragment>
      ) }
    </RightBlock>
  </Wrapper>
);

export default NavBlock;
import React from 'react';
import styled from 'styled-components';

import SwitchWithText from '../SwitchInput/WithText';
import StyledButton from '../Styled/Button';

const Wrapper = styled.li`
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  transition: .2s;

  &:hover {
    box-shadow: 0px 0px 7px 1px #969696;
  }
`;

const ButtonsBlock = styled.div`
  display: inline-flex;
`;

const RemoveButton = StyledButton.extend`
  padding: 5px 10px;
  margin-left: 10px;
`;

const TaskText = styled.span`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-right: 20px;
  min-height: 34px;
  font-size: 16px;
  cursor: ${props => props.isOwner ? 'pointer' : 'default'};
`;

const Task = ({ task, isOwner, deleteThisTask, toggleChecked, togglePrivate }) => {

  return (
    <Wrapper>
      <TaskText checked={task.checked} isOwner={isOwner} onClick={toggleChecked}>
        <strong>{task.username}</strong>: {task.text}
      </TaskText>

      { isOwner && (
        <ButtonsBlock>
          <SwitchWithText checked={!!task.private} onChange={togglePrivate}>
            Private
          </SwitchWithText>
          <RemoveButton onClick={deleteThisTask}>
            &times;
          </RemoveButton>
        </ButtonsBlock>
      ) }
    </Wrapper>
  );
}

export default Task;
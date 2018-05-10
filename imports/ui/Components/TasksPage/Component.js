import React from 'react';
import styled from 'styled-components';

import Task from '../Task';
import NewTaskForm from '../NewTaskForm';
import StyledButton from '../Styled/Button';
import SwitchWithText from '../SwitchInput/WithText';

const TopPanel = styled.div`
  background: #e6e6e6;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoH1 = styled.h1`
  margin: 0;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  background: white;
`;

const TasksPage = ({
  incompleteCount,
  hideCompleted,
  toggleHideCompleted,
  currentUser,
  tasks
}) => (
  <section>
    {currentUser && <NewTaskForm />}
    <TopPanel>
      <TodoH1>Todo List ({incompleteCount})</TodoH1>

      <SwitchWithText checked={!hideCompleted} onChange={toggleHideCompleted}>
        Show Completed
      </SwitchWithText>
    </TopPanel>
    <ListWrapper>
      {tasks.map((task) => {
        const currentUserId = currentUser && currentUser._id;
        const isOwner = task.createdBy === currentUserId;
    
        return (
          <Task
            key={task._id}
            task={task}
            isOwner={isOwner}
          />
        )
      })}
    </ListWrapper>
  </section>
)

export default TasksPage;
import React from 'react';
import styled from 'styled-components';

import Task from '../Task';

const TopPanel = styled.div`
  background: #d2edf4;
  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
  padding: 20px 15px 15px 15px;
  position: relative;
`;

const TasksPage = ({ incompleteCount, hideCompleted, toggleHideCompleted, currentUser, tasks, handleSubmit}) => (
  <section>
    <TopPanel>
      <h1>Todo List ({incompleteCount})</h1>

      <label className="hide-completed">
        <input
          type="checkbox"
          readOnly
          checked={hideCompleted}
          onClick={toggleHideCompleted}
        />
        Hide Completed Tasks
      </label>

      {currentUser && (
        <form className="new-task" onSubmit={handleSubmit} >
          <input
            name="text"
            type="text"
            placeholder="Type to add new tasks"
          />
        </form>
      )}
    </TopPanel>
    <ul>
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
    </ul>
  </section>
)

export default TasksPage;
import React from 'react';
import classnames from 'classnames';

const Task = ({ task, isOwner, deleteThisTask, toggleChecked, togglePrivate }) => {
  const taskClassName = classnames({
    checked: task.checked,
    private: task.private,
  });

  return (
    <li className={taskClassName}>
      { isOwner && (
        <React.Fragment>
          <button className="delete" onClick={deleteThisTask}>
            &times;
          </button>
  
          <input
            type="checkbox"
            readOnly
            checked={!!task.checked}
            onClick={toggleChecked}
          />

          <button className="toggle-private" onClick={togglePrivate}>
            { task.private ? 'Private' : 'Public' }
          </button>
        </React.Fragment>
      ) }

      <span className="text">
        <strong>{task.username}</strong>: {task.text}
      </span>
    </li>
  );
}

export default Task;
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, removeTask, editTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;

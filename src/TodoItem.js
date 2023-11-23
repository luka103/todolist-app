// TodoItem.js
import React, { useState } from 'react';
import './styles/TodoItem.css';

function TodoItem({ task, index, toggleTask, removeTask, editTask }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleTask = () => {
    toggleTask(index);
  };

  const handleRemoveTask = () => {
    removeTask(index);
  };

  const handleEditTask = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    editTask(index, editedText);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);
    setEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {!isEditing ? (
        <div className="todo-item-actions">
          <input type="checkbox" checked={task.completed} onChange={handleToggleTask} />
          <span>{task.text}</span>
          <button onClick={handleEditTask}>Edit</button>
          <button onClick={handleRemoveTask}>Remove</button>
        </div>
      ) : (
        <div className="todo-item-actions">
          <input type="text" value={editedText} onChange={handleChange} />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;

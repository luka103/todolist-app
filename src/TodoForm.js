import React, { useState } from 'react';
import Popup from './Popup';
import './styles/TodoForm.css'; 

function TodoForm({ addTask }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAddTask = (note) => {
    addTask(note);
    setPopupVisible(false);
  };

  return (
    <div className="todo-form-container">
      <button onClick={() => setPopupVisible(true)} className="add-button">
        +
      </button>
      {isPopupVisible && (
        <Popup onSubmit={handleAddTask} onClose={() => setPopupVisible(false)} />
      )}
    </div>
  );
}

export default TodoForm;

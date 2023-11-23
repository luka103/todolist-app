import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchBar from './SearchBar';
import DarkModeButton from './DarkModeButton';
import './styles/TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  const filterTasks = () => {
    return tasks.filter(task =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`todo-app-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Todo App</h1>
      <SearchBar onSearch={setSearchTerm} />
      <DarkModeButton toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <TodoForm addTask={addTask} />
      <TodoList tasks={filterTasks()} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}

export default TodoApp;

// DarkModeButton.js
import React from 'react';
import './styles/DarkModeButton.css';

function DarkModeButton({ toggleDarkMode, darkMode }) {
  return (
    <button
      className={`dark-mode-button ${darkMode ? 'dark-mode' : 'light-mode'}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeButton;

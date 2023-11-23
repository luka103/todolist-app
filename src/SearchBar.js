// SearchBar.js
import React from 'react';
import './styles/SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

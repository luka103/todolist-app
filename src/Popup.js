import React, { useState } from 'react';
import './styles/Popup.css';

function Popup({ onSubmit, onClose }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    setNote('');
    onClose();
  };

  return (
    <div className="popup">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Input your note..."
        className="popup-input"
      />
      <div className="button-container">
        <button type="button" onClick={onClose} className="cancel-button">
          Cancel
        </button>
        <button type="button" onClick={handleSubmit} className="apply-button">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Popup;

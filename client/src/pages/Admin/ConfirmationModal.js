import React from 'react';
import './ConfirmationModal.css'
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='confirmation-conatiner'>
    <div className="confirmation-modal">
      <p>{message}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
    </div>
  );
};

export default ConfirmationModal;

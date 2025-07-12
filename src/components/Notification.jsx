import React from 'react';

const Notification = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="notification-toast">
      {message}
      <button onClick={onClose} className="notification-close">×</button>
    </div>
  );
};

export default Notification; 
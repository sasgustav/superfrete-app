import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

const MessageList = ({ messages }) => {
  return (
    <div className="message-section">
      <h3>Mensagens enviadas</h3>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className="message-item">
            <p>😁 {msg.text}</p>
            <span>{new Date(msg.timestamp.seconds * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;

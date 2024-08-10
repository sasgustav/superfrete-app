import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <div 
      className="message-item" 
      role="listitem" 
      aria-label={`Mensagem enviada em ${message.timestamp}`}
    >
      <p>😁 {message.text}</p>
      <span aria-hidden="true">{message.timestamp}</span>
    </div>
  );
};

export default MessageItem;

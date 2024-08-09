import React from 'react';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((msg, index) => (
      <div key={index} className="message">
        <p>{msg.text}</p>
        <span>{msg.timestamp}</span>
      </div>
    ))}
  </div>
);

export default MessageList;

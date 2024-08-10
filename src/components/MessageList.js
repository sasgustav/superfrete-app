import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-section">
      <h3>Mensagens enviadas</h3>
      <div className="message-list">
        {messages.map((msg, index) => {
          // Verifique se o timestamp é um objeto Date ou um objeto Firestore Timestamp
          const timestamp = msg.timestamp instanceof Date
            ? msg.timestamp
            : new Date(msg.timestamp.seconds * 1000);
          
          return (
            <div key={index} className="message-item">
              <p>😁 {msg.text}</p>
              <span>{timestamp.toLocaleString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;

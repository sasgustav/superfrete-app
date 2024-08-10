/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-section">
      <h3>Mensagens enviadas</h3>
      <div className="message-list" role="list" aria-label="Lista de mensagens enviadas">
        {messages.map((msg, index) => {
          // Verifique se o timestamp é um objeto Date ou um objeto Firestore Timestamp
          const timestamp = msg.timestamp instanceof Date
            ? msg.timestamp
            : new Date(msg.timestamp.seconds * 1000);

          return (
            <div key={index} className="message-item" role="listitem">
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

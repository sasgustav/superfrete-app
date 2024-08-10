/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

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

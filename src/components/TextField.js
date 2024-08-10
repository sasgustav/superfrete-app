/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

import React, { useState } from 'react';

const TextField = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div>
      <h3 id="text-entry-label">Digite um texto abaixo</h3>
      <div className="input-container">
        <input
          type="text"
          id="text-input"
          className="text-field"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? '' : 'Insira sua mensagem*'}
          aria-label="Campo de entrada para mensagem"
          aria-required="true"
        />
        <label
          htmlFor="text-input"
          className={`floating-label ${isFocused || value ? 'active' : ''}`}
        >
          Mensagem*
        </label>
      </div>
    </div>
  );
};

export default TextField;

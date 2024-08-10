/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

import React from 'react';

const SubmitButton = ({ onClick, isDisabled, label = "Enviar", type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`submit-button ${!isDisabled ? 'active' : ''}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={type}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

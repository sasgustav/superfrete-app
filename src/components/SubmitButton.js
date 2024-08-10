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

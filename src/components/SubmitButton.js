import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="submit-button"
    >
      Enviar
    </button>
  );
};

export default SubmitButton;

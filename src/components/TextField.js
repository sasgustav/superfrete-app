import React from 'react';

const TextField = ({ value, onChange }) => {
  return (
    <div>
      <h3 id="text-entry-label">Digite um texto abaixo</h3>
      <input
        type="text"
        className="text-field"
        placeholder="Insira sua mensagem*"
        value={value}
        onChange={onChange}
        aria-label="Campo de entrada para mensagem"
        aria-required="true"
      />
    </div>
  );
};

export default TextField;

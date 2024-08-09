import React from 'react';

const TextField = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Insira sua mensagem*"
    value={value}
    onChange={onChange}
    className="text-field"
  />
);

export default TextField;

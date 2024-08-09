import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from '../components/TextField';

test('it should render TextField and handle changes', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(<TextField value="" onChange={handleChange} />);
  
  const input = getByPlaceholderText('Insira sua mensagem*');
  fireEvent.change(input, { target: { value: 'Test message' } });
  
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'Test message' } }));
});

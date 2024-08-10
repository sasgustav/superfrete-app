import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from '../components/TextField';

test('it should render TextField with the correct initial value and placeholder', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(
    <TextField value="" onChange={() => {}} />
  );

  // Verifica se o placeholder é renderizado
  const input = getByPlaceholderText('Insira sua mensagem*');
  expect(input).toBeInTheDocument();

  // Verifica se o valor inicial está vazio
  expect(input.value).toBe('');
});

test('it should handle changes correctly', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(<TextField value="" onChange={handleChange} />);

  const input = getByPlaceholderText('Insira sua mensagem*');
  fireEvent.change(input, { target: { value: 'Test message' } });

  // Verifica se a função onChange foi chamada uma vez
  expect(handleChange).toHaveBeenCalledTimes(1);

  // Verifica se a função onChange foi chamada com o valor correto
  expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'Test message' } }));
});

test('it should hide the placeholder on focus and show it when blurred with no value', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(<TextField value="" onChange={handleChange} />);

  const input = getByPlaceholderText('Insira sua mensagem*');

  // Foca no campo de entrada
  fireEvent.focus(input);

  // Verifica se o placeholder ainda está presente (depende da implementação, mas normalmente some)
  expect(input.placeholder).toBe('');

  // Altera o valor do campo
  fireEvent.change(input, { target: { value: 'Test message' } });

  // Desfoca o campo
  fireEvent.blur(input);

  // Verifica se o placeholder não reaparece (porque o campo tem valor)
  expect(input.placeholder).toBe('');

  // Altera o valor do campo para vazio
  fireEvent.change(input, { target: { value: '' } });

  // Desfoca o campo novamente
  fireEvent.blur(input);

  // Verifica se o placeholder aparece novamente (porque o campo está vazio)
  expect(input.placeholder).toBe('Insira sua mensagem*');
});

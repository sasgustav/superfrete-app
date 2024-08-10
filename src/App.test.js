import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the application with initial components', () => {
  render(<App />);

  // Verifica se o logo está presente
  const logoElement = screen.getByAltText(/SuperFrete Logo/i);
  expect(logoElement).toBeInTheDocument();

  // Verifica se o título "Digite um texto abaixo" está presente
  const titleElement = screen.getByText(/Digite um texto abaixo/i);
  expect(titleElement).toBeInTheDocument();

  // Verifica se o campo de texto está presente
  const inputElement = screen.getByPlaceholderText(/Insira sua mensagem/i);
  expect(inputElement).toBeInTheDocument();

  // Verifica se o botão "Enviar" está presente e está desabilitado inicialmente
  const buttonElement = screen.getByText(/Enviar/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();

  // Simula a entrada de texto no campo de texto
  fireEvent.change(inputElement, { target: { value: 'Mensagem de teste' } });
  expect(inputElement.value).toBe('Mensagem de teste');

  // Verifica se o botão "Enviar" está habilitado após a entrada de texto
  expect(buttonElement).not.toBeDisabled();

  // Simula o envio da mensagem
  fireEvent.click(buttonElement);

  // Verifica se uma mensagem enviada anteriormente está presente
  const previousMessageElement = screen.getByText(/Oi esta é a sua mensagem enviada anteriormente./i);
  expect(previousMessageElement).toBeInTheDocument();

  // Verifica se outra mensagem enviada anteriormente está presente
  const anotherPreviousMessageElement = screen.getByText(/Oi este é um outro exemplo de mensagem enviada./i);
  expect(anotherPreviousMessageElement).toBeInTheDocument();
});

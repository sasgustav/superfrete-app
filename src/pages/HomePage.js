/**
 * SuperFrete App
 * Desenvolvido por Gustavo Vasconcelos
 * LinkedIn: https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/
 * GitHub: https://github.com/sasgustav
 * 
 * Este arquivo contém a lógica e o layout da página principal do aplicativo.
 */

import React, { useState, useEffect } from 'react';
import '../App.css';
import { sendMessage, getMessages } from '../firebase/firestore';
import TextField from '../components/TextField';
import MessageList from '../components/messages/MessageList';
import logo from '../assets/logo.png';

function MainPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Oi esta é a sua mensagem enviada anteriormente.",
      timestamp: new Date("2024-02-23T12:30:00")
    },
    {
      text: "Oi este é um outro exemplo de mensagem enviada.",
      timestamp: new Date("2024-02-23T12:30:00")
    }
  ]);

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim()) {
      await sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="MainPage">
      <header className="App-header" role="banner">
        <img src={logo} alt="SuperFrete Logo" className="logo" aria-label="SuperFrete Logo" />
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-labelledby="text-entry-label"
        />

        <button
          onClick={handleSendMessage}
          className={`submit-button ${message.trim() ? 'active' : ''}`}
          disabled={!message.trim()}
          aria-disabled={!message.trim()}
        >
          Enviar
        </button>

        {messages.length > 0 && (
          <MessageList messages={messages} />
        )}
      </header>
    </div>
  );
}

export default MainPage;

import React, { useState, useEffect } from 'react';
import './App.css';
import { sendMessage, getMessages } from './firebase/firestore';
import TextField from './components/TextField';
import MessageList from './components/MessageList';
import logo from './assets/logo.png';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

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
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="SuperFrete Logo" className="logo" />
        <h2>Digite um texto abaixo</h2>
        <TextField value={message} onChange={(e) => setMessage(e.target.value)} />
        
        {/* O botão permanece visível, mas é bloqueado quando não há texto */}
        <button
          onClick={handleSendMessage}
          className={`submit-button ${message.trim() ? 'active' : ''}`}
          disabled={!message.trim()}
        >
          Enviar
        </button>
        
        <MessageList messages={messages} />
      </header>
    </div>
  );
}

export default App;

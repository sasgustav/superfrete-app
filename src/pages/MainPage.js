import React, { useState, useEffect } from 'react';
import TextField from '../components/TextField';
import SubmitButton from '../components/SubmitButton';
import MessageList from '../components/MessageList';
import { sendMessage, getMessages } from '../firebase/firestore';

const MainPage = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages(setMessages);
  }, []);

  const handleSubmit = async () => {
    await sendMessage(text);
    setText('');
  };

  return (
    <div className="main-page">
      <img src="superfrete-logo.png" alt="SuperFrete Logo" className="logo" />
      <h2>Digite um texto abaixo</h2>
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <SubmitButton onClick={handleSubmit} />
      <h3>Mensagens enviadas</h3>
      <MessageList messages={messages} />
    </div>
  );
};

export default MainPage;

/**
 * SuperFrete App
 * Desenvolvido por Gustavo Vasconcelos
 * LinkedIn: https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/
 * GitHub: https://github.com/sasgustav
 * 
 * Este arquivo é responsável pelo componente principal do aplicativo.
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './pages/HomePage';
import Spinner from './components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Spinner /> : <MainPage />}
    </div>
  );
}

export default App;

/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

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

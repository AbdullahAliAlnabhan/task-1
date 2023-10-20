import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('me name is abduallah  id number : 136517');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <button onClick={handleClick}>الاسود</button>
      </header>
    </div>
  );
}

export default App;
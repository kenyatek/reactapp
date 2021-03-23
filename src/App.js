import React from 'react'
import logo from './destineqr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to</h1>
        <img src={logo} className="App-logo-altered" alt="logo" />
        <h1>Destine | CodePower </h1>
        <strong>~ David N Matu</strong>
        <p>
          Welcome to Kenyatekzone's main project: Destine Kenya
        </p>
        <a
          className="App-link"
          href="https://destine.co.ke"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
    </div>
  );
}

export default App;

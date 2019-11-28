import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          初めの部分は多くがいらないと思うからcomponentsとかpagesとかのディレクトリを作って始めてください！
        </p>
      </header>
    </div>
  );
};

export default App;

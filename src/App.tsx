import React from 'react';
import logo from './logo.svg';
import CountComponent from './component/countComponent';
import MemoComponent from './component/memoComponent';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Simple Redux</span>
      </header>
      <CountComponent />
      <hr className="App-horizon" />
      <MemoComponent />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './MyComponent/Hello';
import Welcome from './MyComponent/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="Susmita"></Hello>
      <Hello name="Priyanka"></Hello>
      <Hello name="piku"></Hello>
      <Hello name="Soma"></Hello>
      <Welcome></Welcome>
    </div>
  );
}

export default App;

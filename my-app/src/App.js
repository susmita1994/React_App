import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './MyComponent/Hello';
import Welcome from './MyComponent/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="susmita"></Hello>
      <Welcome name="Class 1"></Welcome>
    
    </div>
  );
}

export default App;

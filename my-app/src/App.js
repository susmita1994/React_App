import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './MyComponent/Hello';
import Welcome from './MyComponent/Welcome';

function App() {
  return (
    <div className="App">
    
      <Welcome name="Class 1"></Welcome>
      <Welcome name="Class 2"></Welcome>
      <Welcome name="Class 3"></Welcome>
      <Welcome name="Class 4"></Welcome>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Trunks from './assets/Trunks.jpeg';
function App() {
  return (
    <div className="App">
        <h1>bem vido sapo</h1>
        { /* img public */}
        <div>
        <img src="/killua.png" alt="o omi rapido" />
        </div>
        { /* img src  */ }
        <div>
        <img src={Trunks} alt="o omi do shape" />
        </div>
    </div>
  );
}
export default App;

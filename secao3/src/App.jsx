import React from 'react';
import './App.css';
import Trunks from './assets/Trunks.jpeg';
import ManageData from './components/ManageData';
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
        <ManageData />
    </div>
  );
}
export default App;

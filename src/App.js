import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className='title'>#Covid<span>Count</span></h2>
      </header>
      <p style={{ padding: 10}}><span>#covidcount</span> se diseño con el proposito de hacer un experimento social sobre el COVID-19.</p>
      <Dashboard/>
    </div>
  );
}

export default App;

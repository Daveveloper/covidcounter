import React from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className='title'>#Covid<span>Count</span></h2>
      </header>
      <hr/>
      <h1>costa rica</h1>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;

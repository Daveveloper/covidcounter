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
      <p style={{ padding: 10}}>
        <span className='label'><span style={{color: 'var(--secondary)'}}>Mae Covid</span> ya dejenos salir...</span>
      </p>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;

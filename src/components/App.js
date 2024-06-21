import React from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;

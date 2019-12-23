import React from 'react';
import Users from './containers/Users'
import Books from './containers/Books'
import Computers from './containers/Computers'

function App() {
  return (
    <div className="App">
      <header className="Header"><h1>Quick Survey</h1></header>
      <div className="Container">
        <div className="Wrapper">
          <div className="Users"><Users /></div>
          <div className="Books"><Books /></div>
          <div className="Computers"><Computers /></div>
        </div>
      </div>
    </div>
  );
}

export default App;

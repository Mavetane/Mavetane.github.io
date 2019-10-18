import React from 'react';
import Users from './containers/Users'
import Books from './containers/Books'
import Computers from './containers/Computers'

function App() {
  return (
    <div className="App">
      <Users />
      <Books />
      <div><Computers /></div>
    </div>
  );
}

export default App;

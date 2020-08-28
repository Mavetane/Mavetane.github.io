import React from 'react';
import './App.css';
// import Recipe from './containers/Recipe';
import ShowRecipies from './containers/ShowRecipies'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        Recipe Box
      </header>
      {/* <Recipe /> */}
      <ShowRecipies />
    </div>
  );
}

export default App;

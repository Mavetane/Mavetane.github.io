import React from 'react';
import './App.css';
import Recipe from './containers/Recipe';
import ShowRecipies from './containers/ShowRecipies';
import { useState } from 'react';

function App () {
  const [state, setState] = useState(false);

  const addRecipe = () => {
    setState(!state)
  }
  return (
    <div className="App">
      <header className="App-header">
        Collen's Recipe Box
      </header>
      <ShowRecipies />
      {state ? <Recipe /> : null}<br />
      {!state ? <button onClick={addRecipe}>Add recipe</button> :
        <button onClick={addRecipe}>close</button>}
    </div>
  );
}

export default App;

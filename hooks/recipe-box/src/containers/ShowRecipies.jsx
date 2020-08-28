import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ShowRecipies = () => {
  const recipes = useSelector(state => state.recipe.recipes);
  const [state, setState] = useState(false)
  const show = () => {
    setState(!state)
    console.log(state)
  }

  const recipeName = recipes.map(item => (<div key={item.recipeName}>
    {state === false ? <label onClick={show}>{item.recipeName}</label> : null}
    {state ? <div>
      {item.ingredient}
    </div> : null}

  </div>))

  console.log(recipeName)
  return (
    <div>
      {recipeName}
    </div>
  )
}


export default ShowRecipies;
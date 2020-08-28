import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import Recipe from './Recipe';

const ShowRecipies = () => {
  const recipes = useSelector(state => state.recipe.recipes);
  const [selectedRecipe, setSelectedR] = useState({});

  const show = (item) => {
    setSelectedR(item)
  }


  const recipe = () => recipes.map(item => (
    <div key={item.recipeName} className="Map">
      {<h2 onClick={() => show(item)}>{item.recipeName}</h2>}
    </div>))
  console.log('recipes', recipes)
  return (

    <div className="Wrapper">
      <div className="Recipe-names">
        {recipe()}
      </div>
      <div className="Recipe-details">
        <label>{selectedRecipe.recipeName}</label><br />
        {selectedRecipe.ingredients}
      </div>
    </div>
  )
}


export default ShowRecipies;
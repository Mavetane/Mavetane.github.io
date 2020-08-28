import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions/recipe'


const Recipe = () => {
  const [recipe, setRecipe] = useState({ recipeName: "", ingredients: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault()
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  }

  const submit = () => {
    dispatch(addRecipe(recipe))
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={recipe.recipeName}
        name="recipeName" placeholder="Violate cake"
      />
      <input type="text" onChange={handleChange} value={recipe.ingredients}
        name="ingredients" placeholder="flour, baking powerder, salt, eggs ..." />
      <button onClick={() => submit(recipe)}>addRecipe</button>
    </div>
  )
}

export default Recipe;
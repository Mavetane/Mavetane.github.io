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
    if (recipe.recipeName === "" || recipe.ingredients === "") {
      return alert("Input fields are required")
    }
    if (recipe.recipeName === "") alert("Enter recip field")
    if (recipe.ingredients === "") alert("Enter ingredient field")

    dispatch(addRecipe(recipe));
  }
  return (
    <div className="Recipe-wrapper">
      <label>Recipe Name</label>
      <input type="text" onChange={handleChange} value={recipe.recipeName}
        name="recipeName" placeholder="Violate cake"
      />
      <br />
      <label>Ingredients</label>
      <input type="text" onChange={handleChange} value={recipe.ingredients}
        name="ingredients" placeholder="flour, baking powerder, salt, eggs ..." />
      <p>Enter ingredients seperated by commas,</p>
      <br />
      <button onClick={() => submit(recipe)}>addRecipe</button>
    </div>
  )
}

export default Recipe;
import { ADD_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipes: [
    { recipeName: "Bread", ingredients: "Yeast, water, sugar, salt, eggs" },
    { recipeName: "Pap", ingredients: "Water, Maize , salt" },
    { recipeName: "Magwinya", ingredients: "Yeast, water, sugar, salt, magarine, oil" }
  ]
}

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return { ...state, recipes: action.payload }
    default:
      return state;
  }

}

export default recipeReducer;
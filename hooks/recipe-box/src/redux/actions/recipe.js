import { ADD_RECIPE } from "./actionTypes";

export const addRecipe = (recipe) => {
  return dispatch => {
    dispatch({ type: ADD_RECIPE, payload: recipe })
  }
} 
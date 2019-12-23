import {REMOVE_USER, ADD_USER} from '../users/actionTypes'
const inititalState = { all: [] }

export default function counter(state = inititalState, action) {
  switch (action.type) {
    case "ADD_USERS": {
     
      return { ...state, all: action.payload, }
    }
    case ADD_USER: {
      const id = state.all.length == 0 ? 1 : state.all[state.all.length - 1].id + 1

      const newState = { ...state, all: [...state.all, { id, first_name: action.payload.first_name }] }
      
      return newState;
    }
    case REMOVE_USER: {
      const modifiedState =  { all: [...state.all.filter(user => user.id !== action.payload.id)] }
      return modifiedState
    }
    default:
      return state
  }
}
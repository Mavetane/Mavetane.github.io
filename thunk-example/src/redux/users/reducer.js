import {REMOVE_USER, ADD_USER} from '../users/actionTypes'
const inititalState = { all: [] }

export default function counter(state = inititalState, action) {
  switch (action.type) {
    case "ADD_USERS": {
     
      return { ...state, all: action.payload, }
    }
    case ADD_USER: {
      console.log("I'm the payload", action.payload.user.name)
      const newState = { ...state, all: [...state.all, { id: action.payload.id, name: action.payload.user.name }] }
      
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
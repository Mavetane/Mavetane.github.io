import {REMOVE_COMPUTER, ADD_COMPUTER, SHOW_COMPUTERS}  from './actionTypes'


const initialState = {
  myComputers: []
}

export default function computers(state = initialState, action) {
  switch (action.type) {
    case SHOW_COMPUTERS: {
      return {
        ...state,
        myComputers: action.payload 
      };
    }
    case ADD_COMPUTER: {
     const newState = { myComputers: [...state.myComputers, { name: action.payload.name, id: action.payload.id}] }
      return newState
    }
    case REMOVE_COMPUTER: {
    const  modifiedState = {myComputers: [...state.myComputers.filter(computer => computer._id !== action.payload.id)]} 
      return modifiedState
    }
    default: {
      return state
    }
  }
}
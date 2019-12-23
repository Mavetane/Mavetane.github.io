import {REMOVE_COMPUTER, ADD_COMPUTER}  from './actionTypes'

const initialState = {
  myComputers: [{
    name: "MacBook",
    id: 1
  }]
}

export default function computers(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPUTER: {
      const id = state.myComputers.length == 0 ? 1: state.myComputers[state.myComputers.length - 1].id+1
     const newState = { myComputers: [...state.myComputers, { name: action.payload.name, id}] }
      return newState
    }
    case REMOVE_COMPUTER: {
    const  modifiedState = {myComputers: [...state.myComputers.filter(computer => computer.id !== action.payload.id)]} 
      return modifiedState
    }
    default: {
      return state
    }
  }
}
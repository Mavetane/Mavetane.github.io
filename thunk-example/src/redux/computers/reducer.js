const initialState = {
  myComputers: [{
    name: "MacBook",
    id: 1
  }]
}

export default function computers(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPUTER": {
      if(state.myComputers.length == 0) {
        return {myComputers: [...state.myComputers, {name: action.payload.name, id: 1}]}
      }
      return { myComputers: [...state.myComputers,{ name: action.payload.name, id : state.myComputers[state.myComputers.length - 1].id + 1} ]}
    }
    case "REMOVE_COMPUTERS": {
      return { myComputers: [...state.myComputers.filter(computer => computer.id !== action.payload.id)] }
    }
    default: {
      return state
    }
  }
}
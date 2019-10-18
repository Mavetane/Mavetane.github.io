const inititalState = { all: [] }

export default function counter(state = inititalState, action) {
  switch (action.type) {
    case "ADD_USERS": {
     
      return { ...state, all: action.payload, }
    }
    case "ADD_USER": {
      if(state.all.length == 0) {
        return {all: [...state.all, {first_name: action.payload.first_name, id: 1} ]}
      }
      const newState = { ...state, all: [...state.all, { id: state.all[state.all.length - 1].id + 1, first_name: action.payload.first_name }] }
      return newState;
    }
    case "REMOVE_USERS": {
      return { all: [...state.all.filter(user => user.id !== action.payload.id)] }
    }
    default:
      return state
  }
}
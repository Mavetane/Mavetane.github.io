const initialState = {
  availableBooks: [{
    name: "Trevor",
    title: ["Born a crime"],
    id: 1,
    isToggle: false
  }]
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK": {
      if(state.availableBooks.length == 0) {
        return { availableBooks: [...state.availableBooks, {name: action.payload.name, title: [action.payload.title], id: 1}]}
      }
      return { availableBooks: [...state.availableBooks, { name: action.payload.name, title: [action.payload.title], id: state.availableBooks[state.availableBooks.length - 1].id + 1 }] }
    }
    case "EDIT_BOOK": {
      let index = state.availableBooks.findIndex((book => book.id == action.payload.id));
      state.availableBooks[index].title = [...state.availableBooks[index].title, action.payload.title]; 
      return state
    }
    case "REMOVE_BOOKS": {
      return { availableBooks: [...state.availableBooks.filter(book => book.id !== action.payload)] }
    }
    default: {
      return state
    }
  }
}
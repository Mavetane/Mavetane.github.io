import { ADD_BOOK, REMOVE_BOOK } from '../books/actionTypes'

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
    case ADD_BOOK: {
      const id = state.availableBooks.length == 0 ? 1: state.availableBooks[state.availableBooks.length - 1].id+1
      const newState = { availableBooks: [...state.availableBooks, {id, name: action.payload.name, title: [action.payload.title]}] }
      return newState
    }
    case "EDIT_BOOK": {
      let index = state.availableBooks.findIndex((book => book.id == action.payload.id));
      state.availableBooks[index].title = [...state.availableBooks[index].title, action.payload.title];
      return state
    }
    case REMOVE_BOOK: {
      return { availableBooks: [...state.availableBooks.filter(book => book.id !== action.payload)] }
    }
    default: {
      return state
    }
  }
}
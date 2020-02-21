import { ADD_BOOK, REMOVE_BOOK, SHOW_BOOKS, EDIT_BOOK } from '../books/actionTypes'

const initialState = {
  availableBooks: []
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case SHOW_BOOKS: {
      return {
        ...state,
        availableBooks: action.payload 
      };
    }
    case ADD_BOOK: {
      const newState = { availableBooks: [...state.availableBooks, {id: action.payload.id, name: action.payload.name, title: [action.payload.title]}] }
      return newState
    }
    case EDIT_BOOK: {
      let index = state.availableBooks.findIndex((book => book._id == action.payload.id));
      console.log("I'm index", index)
      state.availableBooks[index].title = action.payload.title;
      return state
    }
    case REMOVE_BOOK: {
      console.log(state.availableBooks)
      return { availableBooks: [...state.availableBooks.filter(book => book._id !== action.payload.id)] }
    }
    default: {
      return state
    }
  }
}
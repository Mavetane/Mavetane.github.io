import axios from 'axios';
import { SHOW_BOOKS, REMOVE_BOOK, EDIT_BOOK, SEARCH_BOOK } from '../books/actionTypes'

export const addBook = (name, title) => {
    return async dispatch => {
        try {
            console.log("I'm details", { name, title })
            const { data } = await axios.post("http://localhost:3002/books", { name, title })
            dispatch({
                type: "ADD_BOOK",
                payload: data
            })
        } catch (e) {
            console.log(e)
        }
    }
}


export const getBooks = (page, limit) => {
    // `http://localhost:3002/bookss?page=${page}&limit=${limit}`
    return async dispatch => {
        try {
            const res = await axios.get("http://localhost:3002/bookss")
            const books = res.data
            console.log("books", books)
            dispatch({
                type: "SHOW_BOOKS",
                payload: books
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const searchContent = (findAurthor, findTitle) => {
    return async dispatch => {
        try {
            const toBeSearched = await axios.get("http://localhost:3002/bookss/", {
                params: {
                    findAurthor,
                    findTitle
                }
            })
            const foundBooks = await toBeSearched
            dispatch({
                type: "SEARCH_BOOK",
                payload: [...foundBooks.data]
            })

        } catch (e) {

        }
    }
}

export const removeBook = (id) => {
    return async dispatch => {
        try {
            console.log("I'm a book id", id)
            await axios.delete(`http://localhost:3002/books/${id}`)
            dispatch({
                type: "REMOVE_BOOK",
                payload: { id }
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const editBook = (title, id) => {
    return async dispatch => {
        console.log(title, id)
        await axios.put(`http://localhost:3002/bookss/${id}`, { title, id })
        dispatch({
            type: "EDIT_BOOK",
            payload: { title, id }
        })
    }
}

export default { addBook, getBooks, removeBook, editBook, searchContent }
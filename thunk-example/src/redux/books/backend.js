import axios from 'axios';
import {SHOW_BOOKS, REMOVE_BOOK, EDIT_BOOK} from '../books/actionTypes'

export const addBook = (name, title) => {
    return async dispatch => {
        try{
            console.log("I'm details", {name,title})
            await axios.post("http://localhost:3002/books", {name, title})
            dispatch({
                type: "ADD_BOOK",
                payload: {name, title} 
            })
        } catch(e){
            console.log(e)
        }
    }
}


export const getBooks = (name, title) => {
    return async dispatch => {
        try{
            const data = await axios.get("http://localhost:3002/books")
            const books = await data

            dispatch({
                type: "SHOW_BOOKS", 
                payload: [...books.data]
            })
        } catch(e) {
            console.log(e)
        }
    }
}

 export const removeBook = (id) => {
     return async dispatch => {
         try{
             console.log("I'm a book id", id)
             await axios.delete(`http://localhost:3002/books/${id}`)
             dispatch({
                 type: "REMOVE_BOOK",
                 payload: {id}
             })
         } catch(e) {
             console.log(e)
         }
     }
 }

 export const editBook = (title, id) => {
     return async dispatch => {
         console.log(title, id)
         await axios.put(`http://localhost:3002/books/${id}`,{title,id})
         dispatch({
             type: "EDIT_BOOK",
             payload: {title,id}
         })
     }
 }

export default {addBook, getBooks, removeBook, editBook}
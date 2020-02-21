import {REMOVE_COMPUTER} from '../redux/computers/actionTypes'
import {REMOVE_USER} from '../redux/users/actionTypes'
import {REMOVE_BOOK} from '../redux/books/actionTypes'

export function removeBook(id) { 
    console.log("dd", REMOVE_BOOK)
    return {
        type: REMOVE_BOOK,
        payload: {id}
    }
}

export function removeComputer(id) {
    return {
        type: REMOVE_COMPUTER,
        payload: {id}
    }
}

export function removeUser(id) {
    return {
        type: REMOVE_USER,
        payload: { id }
    }
}
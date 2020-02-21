import axios from 'axios';
import {SHOW_COMPUTERS, REMOVE_COMPUTER} from '../computers/actionTypes'

export const addComputer = (name) => {
    return async dispatch => {
        try{
            console.log("I'm name", {name})
            await axios.post("http://localhost:3002/computer", {name})

            dispatch({
                type: "ADD_COMPUTER",
                payload: {name} 
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const getComputers = (name) => {
    return async dispatch => {
        try {
        
        const data = await axios.get("http://localhost:3002/computers")
        const computers = await data

        dispatch({
            type: "SHOW_COMPUTERS",
            payload: [...computers.data ]
        })
    }catch (e) {
        console.log(e)
    }
    }
}

export const removeComputer = (id) => {
    return async dispatch => {
        try {
            // console.log("I'm id", id)
            await axios.delete(`http://localhost:3002/computers/${id}`)
            dispatch({
                type: REMOVE_COMPUTER,
                payload: {id}
            })
        } catch(e) {
            console.log(e)
        }
    }
}


export default {addComputer, getComputers, removeComputer}
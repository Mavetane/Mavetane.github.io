import { DECREMENT, INCREMENT, ADD_USER } from '../actions/actionTypes';


const initialState = {
    counter: 0,
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 }
        case DECREMENT:
            return { counter: state.counter - 1 }
        case ADD_USER:
            {
                const newState = { users: [...state.users, action.payload] }
                console.log("state", newState)
                return newState
            }
        default:
            return state;
    }
}

export default rootReducer;
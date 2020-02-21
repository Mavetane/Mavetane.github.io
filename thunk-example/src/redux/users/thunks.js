import axios from 'axios'


export const addUser = (user) => {
  return async dispatch => {
    try {
      console.log("user", { user })
      await axios.post("http://localhost:3002/users", { ...user })
      dispatch({
        type: "ADD_USER",
        payload: {user} 
    })
    } catch (e) {
      console.log(e)
    }
  }
}
export const getAllUsers = () => {
  return async dispatch => {
    try {
      const data = await axios.get("http://localhost:3002/users")
      const users = await data

      dispatch({
        type: "ADD_USERS",
        payload: [...users.data]
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const removeUser = (id) => {
  return async dispatch => {
    try {
      console.log("I'm users id:", id)
      await axios.delete(`http://localhost:3002/users/${id}`)
      dispatch({
        type: "REMOVE_USER",
        payload: { id }
      })
    } catch (e) {
      console.log(e)
    }
  }
}


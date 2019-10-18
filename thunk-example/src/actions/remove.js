export function removeBooks(name) {
    return {
        type: "REMOVE_BOOKS",
        payload: name
    }
}

export function removeComputers(id) {
    return {
        type: "REMOVE_COMPUTERS",
        payload: {id}
    }
}

export function removeUsers(id) {
    return {
        type: "REMOVE_USERS",
        payload: { id }
    }
}
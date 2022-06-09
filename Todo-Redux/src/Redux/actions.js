
export const AddTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}

export const DeleteTodo = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: data
    }
}
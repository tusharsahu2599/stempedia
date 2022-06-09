let initalstate = {
    todos: []
}


const TodoReducer = (store = initalstate , {type, payload}) => {
    switch (type) {
        case "ADD_TODO":
            return {
                ...store,
                todos: [...store.todos, payload]
            } ;
        default:
            return store;
    }
}

export { TodoReducer };

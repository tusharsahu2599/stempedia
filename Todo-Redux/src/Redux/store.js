

import {createStore} from 'redux';

import { TodoReducer } from './reducers';


const Initialstate = {
    todos: []
}


const store = createStore(TodoReducer, Initialstate);

export {store};
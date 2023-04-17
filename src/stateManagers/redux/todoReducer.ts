import {todo, initial} from "./types";



export const initialState: initial = {
    todos: [
        {id: 0, title: 'Learn'},
        {id: 1, title: 'Work'},
        {id: 2, title: 'Enjoy'},
    ]
}

const ADD = 'ADD'
const REMOVE = 'REMOVE'


export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE:
            return {...state, todos: state.todos.filter(item => item.id !== action.payload)}
        default: return state;
    }
}

export const actionAdd = (payload: todo) => ({type: ADD, payload})
export const actionRemove = (payload: number) => ({type: REMOVE, payload})
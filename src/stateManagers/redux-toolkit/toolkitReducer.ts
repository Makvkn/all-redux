import {createAction, createReducer} from "@reduxjs/toolkit";
import {initial} from "./types";


export const initialState:initial = {
    todos: [
        {id: 0, title: 'Learn'},
        {id: 1, title: 'Work'},
        {id: 2, title: 'Enjoy'},
    ],
    count: 0,
}

export const increment: any = createAction('INCREMENT')
export const decrement: any = createAction('DECREMENT')

 createReducer(initialState, {
    [increment]: function (state: any) {
        state.count = state.count + 1
    },
    [decrement]: function (state: any) {
        state.count = state.count -1
    }
})




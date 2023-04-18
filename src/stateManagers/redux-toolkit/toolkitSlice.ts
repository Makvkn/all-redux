import {createSlice} from "@reduxjs/toolkit"


export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        todos: [{id: 0, title: 'Study'}, {id: 1, title: 'Work'}, {id: 2, title: 'Enjoy'}]
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastTodo(state) {
            state.todos.pop()
        }
    }
})

export default toolkitSlice.reducer;

export const {increment, decrement, addTodo} = toolkitSlice.actions
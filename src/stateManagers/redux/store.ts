import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {todoReducer} from "./todoReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    todoReducer,
    counterReducer,
})

export let store = legacy_createStore(rootReducer, composeWithDevTools());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
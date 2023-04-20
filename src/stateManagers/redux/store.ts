import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {todoReducer} from "./todoReducer";
// import {composeWithDevTools} from "redux-devtools-extension";   //Dev Tools for Redux
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";

//middleware for SAGA
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    todoReducer,
    counterReducer,
})

//was composeDevTools for devTools-redux
// export let store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware), composeWithDevTools());
export let store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//run our RootWatcher
sagaMiddleware.run(rootWatcher)
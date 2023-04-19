import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";


const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const storeToolkit = configureStore({
    reducer: rootReducer
})
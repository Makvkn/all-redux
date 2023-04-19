import {count} from "./types";

export const initialState: count = {
    count: 0
}

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const ZERO = 'ZERO'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'



export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count + 1}
        case DECREASE:
            return {...state, count: state.count - 1}
        case ZERO:
            return {...state, count: 0}
        default:
            return state
    }
}

export const actionIncrease = () => ({type: INCREASE})
export const AsyncActionIncreaseCreator = () => ({type: ASYNC_INCREMENT})
export const AsyncActionDecreaseCreator = () => ({type: ASYNC_DECREMENT})
export const actionDecrease = () => ({type: DECREASE})
export const actionZero = () => ({type: ZERO})
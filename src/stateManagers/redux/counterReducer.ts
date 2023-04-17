import {count} from "./types";

export const initialState:count = {
    count: 0
}

 const INCREASE = 'INCREASE'
 const DECREASE = 'DECREASE'
 const ZERO = 'ZERO'


export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count + 1}
        case DECREASE:
            return {...state, count: state.count - 1}
        case ZERO:
            return {...state, count: 0}
        default: return state
    }
 }

 export const actionIncrease = () => ({type: INCREASE})
 export const actionDecrease = () => ({type: DECREASE})
 export const actionZero = () => ({type: ZERO})
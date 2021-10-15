import { combineReducers } from "redux"
import bankReducer from "./bankReducer"
import numReducer from "./numReducer"

export const bankRC = combineReducers({
    bank: bankReducer,
})

export const numRC = combineReducers({
    num: numReducer,
})

export type bankState = ReturnType<typeof bankRC>
export type numState = ReturnType<typeof numRC>

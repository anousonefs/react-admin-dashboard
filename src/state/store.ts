import { bankRC, numRC } from "./reducers"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

export const storeBank = createStore(bankRC, {}, applyMiddleware(thunk))
export const storeNum = createStore(numRC, {}, applyMiddleware(thunk))

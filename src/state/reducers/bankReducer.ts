import { Action } from "../actions/bank"
import { ActionsType } from "../action-type/index"

const initialState = 0
const bankReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionsType.DEPOSIT:
            return state + action.payload
        case ActionsType.WITHDRAW:
            return state - action.payload
        case ActionsType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default bankReducer

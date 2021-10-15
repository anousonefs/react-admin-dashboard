import { ActionsType } from "../action-type"
import { Dispatch } from "redux"
import { Action } from "../actions/bank"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionsType.DEPOSIT, payload: amount })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionsType.WITHDRAW, payload: amount })
    }
}
export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionsType.BANKRUPT })
    }
}

import { Dispatch } from "redux"
import { Actions } from "../actions/num"

export const num1 = (amount: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({ type: "num1", payload: amount })
    }
}

export const num2 = (amount: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({ type: "num2", payload: amount })
    }
}

export const num3 = (amount: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({ type: "num3", payload: amount })
    }
}

export const num4 = (amount: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({ type: "num4", payload: amount })
    }
}
export const num5 = (amount: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({ type: "num5", payload: amount })
    }
}

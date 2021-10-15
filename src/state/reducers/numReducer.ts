import { Actions } from "../actions/num"

const initialState = 0
const numReducer = (state: number = initialState, action: Actions) => {
    switch (action.type) {
        case "num1":
            return action.payload + state
        case "num2":
            return action.payload + state
        case "num3":
            return state - action.payload
        case "num4":
            return state - action.payload
        case "num5":
            return 0
        default:
            return state + 100
    }
}

export default numReducer

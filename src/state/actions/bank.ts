import { ActionsType } from "../action-type/index"
interface login {
    type: ActionsType.DEPOSIT
    payload: number
}

interface logout {
    type: ActionsType.WITHDRAW
    payload: number
}

interface nocase {
    type: ActionsType.BANKRUPT
}

export type Action = login | logout | nocase

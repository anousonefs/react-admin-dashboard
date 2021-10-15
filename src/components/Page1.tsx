import React from "react"
// import { AppDispatch } from "../index"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionBankCreators, bankState } from "../state"

function Page1() {
    const amount = useSelector((state: bankState) => state.bank)
    const dispatch = useDispatch()
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
        actionBankCreators,
        dispatch
    )
    console.log("amount = ", amount)
    return (
        <div className="page1">
            <h3>{amount}</h3>
            <button onClick={() => depositMoney(100)}>Deposit</button>
            <button onClick={() => withdrawMoney(50)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    )
}

export default Page1

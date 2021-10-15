import React from "react"
import { numState, actionNumCreators } from "../state"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"
import "./NumPage.css"

const NumPage = () => {
    const number = useSelector((state: numState) => state.num)
    const dispatch = useDispatch()
    const { num1, num2, num3 } = bindActionCreators(actionNumCreators, dispatch)

    return (
        <div className="numPage">
            <h3>hi this is num page</h3>
            <h4>num: {number}</h4>
            <div className="listItems">
                <button onClick={() => num1(1)}>num1</button>
                <button onClick={() => num2(2)}>num2</button>
                <button onClick={() => num3(3)}>num3</button>
            </div>
        </div>
    )
}

export default NumPage

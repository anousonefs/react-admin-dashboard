import React from "react"
import NumPage from "./components/NumPage"
import "./App.css"
import Page1 from "./components/Page1"
import { Provider } from "react-redux"
import { storeNum } from "./state/index"

function App() {
    return (
        <div className="App">
            <Page1 />
            <h3>in app main</h3>
            <Provider store={storeNum}>
                <NumPage />
            </Provider>
        </div>
    )
}

export default App

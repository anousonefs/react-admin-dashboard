import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// import 3 redux
// import { createStore } from "redux"
import { Provider } from "react-redux"
import { storeBank } from "./state/index"
// import { composeWithDevTools } from "redux-devtools-extension"
// import reducers from "./state/reducers/index"

// const store = createStore(reducers, composeWithDevTools())

ReactDOM.render(
    <React.StrictMode>
        {/*  use provider for access store */}
        <Provider store={storeBank}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)

import React from "react"
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="others">pages</div>
            </div>
        </div>
    )
}

export default App

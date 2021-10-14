import React from "react"
import TopBar from "./components/topbar/TopBar"
import SideBar from "./components/sidebar/SideBar"
import "./App.css"

const App: React.FC = () => {
    return (
        <div className="App">
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="others">others pages</div>
            </div>
        </div>
    )
}

export default App

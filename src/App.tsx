import React from "react"
import TopBar from "./components/topbar/TopBar"
import SideBar from "./components/sidebar/SideBar"
import "./App.css"
import Home from "./pages/home/Home"

const App: React.FC = () => {
    return (
        <div className="App">
            <TopBar />
            <div className="container">
                <SideBar />
                <Home />
            </div>
        </div>
    )
}

export default App

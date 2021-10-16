import React from "react"
import TopBar from "./components/topbar/TopBar"
import SideBar from "./components/sidebar/SideBar"
import "./App.css"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <TopBar />
                <div className="container">
                    <SideBar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/user/:userID">
                            <User />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App

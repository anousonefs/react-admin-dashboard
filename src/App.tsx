import React from "react"
import TopBar from "./components/topbar/TopBar"
import SideBar from "./components/sidebar/SideBar"
import "./App.css"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"

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
                        <Route path="/newUser">
                            <NewUser />
                        </Route>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                        <Route path="/product/:productId">
                            <Product />
                        </Route>
                        <Route path="/newProduct">
                            <NewProduct />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App

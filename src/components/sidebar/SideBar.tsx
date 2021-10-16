import React from "react"
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material"
import "./SideBar.css"
import { Link } from "react-router-dom"

const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Trending
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                User
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            New User
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            timeline
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar

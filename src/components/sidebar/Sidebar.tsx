import React from "react"
import { TrendingUp } from "@mui/icons-material"
import "./Sidebar.css"

const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <span className="sidebarTitle">home</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <span className="sidebarTitle">home</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <span className="sidebarTitle">home</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="icon" />
                            <span>trending</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar

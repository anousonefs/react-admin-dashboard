import React from "react"
import { NotificationsNone, Language, Settings } from "@mui/icons-material"
import "./TobBar.css"

function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBar

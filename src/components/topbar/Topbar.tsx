import React from "react"
import { Settings, Notifications, AccountCircle } from "@mui/icons-material"
import "./Topbar.css"

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <div className="logo">jdb fx</div>
            </div>
            <div className="topbarRight">
                <div className="containerIcons">
                    <div className="iconItems">
                        <Notifications className="icon" />
                        <div className="notiLabel">3</div>
                    </div>
                    <div className="iconItems">
                        <Settings className="icon" />
                    </div>
                    <div className="iconItems">
                        <AccountCircle className="icon" />
                        <div className="notiLabel">1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

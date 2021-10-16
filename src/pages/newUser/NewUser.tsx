import React from "react"
import "./newUser.css"

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Jonh" />
                </div>
                <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="Jonh Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Jonh@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="020 99557922" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Vientaine | Laos" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label htmlFor="male">male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select
                            name="active"
                            id="active"
                            className="newUserSelect"
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button className="newUserButton">create</button>
            </form>
        </div>
    )
}

export default NewUser

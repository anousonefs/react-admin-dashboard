import React, { useState } from "react"
import { DeleteOutline } from "@mui/icons-material"
import { userRows, userRowsType } from "../../dummyData"
import "./userList.css"
import { DataGrid, GridCellParams } from "@mui/x-data-grid"
import { Link } from "react-router-dom"

export default function UserList() {
    const [data, setdata] = useState<userRowsType[]>(userRows)

    const handleDelete = (id: number) => {
        if (data) {
            setdata(data.filter((item) => item.id !== id))
        }
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "Username",
            width: 200,
            renderCell: (params: GridCellParams) => {
                return (
                    <div className="userListUser">
                        <img
                            src={params.row.avatar}
                            alt=""
                            className="userListImg"
                        />
                        {params.row.username}
                    </div>
                )
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 150,
        },
        {
            field: "transaction",
            headerName: "Transaction Volumn",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params: GridCellParams) => {
                return (
                    <div className="UserListActionItem">
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                )
            },
        },
    ]

    return (
        <div style={{ height: 600, width: "100%" }}>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

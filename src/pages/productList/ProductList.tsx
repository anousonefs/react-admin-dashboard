import React, { useState } from "react"
import { DeleteOutline } from "@mui/icons-material"
import { productRows, productRowsType } from "../../dummyData"
import { DataGrid, GridCellParams } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import "./productList.css"

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<productRowsType[]>(productRows)

    const handleDelete = (id: number) => {
        if (products) {
            setProducts(products.filter((product) => product.id !== id))
        }
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params: GridCellParams) => {
                return (
                    <div className="productListItem">
                        <img
                            src={params.row.img}
                            alt=""
                            className="productListImg"
                        />
                        {params.row.name}
                    </div>
                )
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 150,
        },
        {
            field: "price",
            headerName: "Price",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params: GridCellParams) => {
                return (
                    <div className="UserListActionItem">
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                )
            },
        },
    ]

    return (
        <div className="productList">
            <DataGrid
                disableSelectionOnClick
                rows={products}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList

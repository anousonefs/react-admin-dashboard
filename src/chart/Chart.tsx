import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    // Legend,
    ResponsiveContainer,
} from "recharts"

import "./chart.css"

interface dataType {
    name: string
    "Active User": number
}

interface Props {
    title: string
    data: dataType[]
    dataKey: string
    grid: boolean
}

const Chart = ({ title, data, dataKey, grid }: Props) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={5 / 1}>
                <LineChart data={data}>
                    {/* <Legend /> */}
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

import React from "react"
import { userData } from "../../dummyData"
import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredinfo/FeaturedInfo"
import "./Home.css"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart
                data={userData}
                title="User Analytics haha"
                grid
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home

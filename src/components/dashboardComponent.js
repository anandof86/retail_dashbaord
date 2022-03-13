import { useSelector, shallowEqual } from "react-redux";
import { BoxComponent, ProgressComponent, BarChartComponent, MapChartComponent, SummaryComponent } from "./widgets";

const DashboardComponent = () => {

    const dashboardDate = useSelector((state) => state, shallowEqual);
    const { revenue, progress } = dashboardDate.collection;
    return (
        <>

            <div className="row review">
                <SummaryComponent />
                {revenue.map((data, i) => {
                    return (
                        <BoxComponent key={i} revenueData={data} />
                    )
                })}

            </div>
            <div className="row">
                {progress.map((data, i) => {
                    return (
                        <ProgressComponent key={i} progressData={data} />
                    )
                })}

            </div>

            <div className="row">
                <div className="col-md-6">
                    <BarChartComponent />
                </div>
                <div className="col-md-6">
                    <MapChartComponent />
                </div>
            </div>
        </>
    )
}

export default DashboardComponent;


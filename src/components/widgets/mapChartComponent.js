import Chart from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["India", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

const MapChartComponent = () => {
    return (
        <Chart chartType="GeoChart" width="100%" height="400px" data={data} />
    )
}

export default MapChartComponent;
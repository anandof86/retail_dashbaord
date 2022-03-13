import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {colors} from '../../config/colors';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
var myData = [12, 19, 3, 5, 2, 3];
const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Order Trend by Store',
        },
        colorschemes: {
            scheme: 'brewer.Paired12'
        }
    },
};

const labels = ['Amazon', 'Flipkart', 'Ebay', 'BestBuy', 'Wallmart'];

const data = {
    labels,
    datasets: [
        {
            label: 'Order Trend',
            data: labels.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1),
            backgroundColor: colors
        }
    ],
};
const BarChartComponent = () => {
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChartComponent;

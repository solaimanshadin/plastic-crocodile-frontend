import { Line } from 'react-chartjs-2'
import React from 'react';
const options = {
    elements: {
        line: {
            tension: 0.5
        }
    }
};

const Chart = () => {
    const data = {
        labels: ['1 sept', '2 sept', '3 sept', '4 sept', '5 sept'],
        datasets: [
            {
                label: 'Data of this month',
                data: [500, 400, 502, 404, 502, 340],
                borderColor: "#21cfd3",
                backgroundColor: 'rgb(57 189 167 / 38%)',
                fill: true
            }
        ]
    }
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;
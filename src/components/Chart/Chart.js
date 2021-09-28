import { Line } from 'react-chartjs-2'
import React from 'react';
import moment from 'moment';
const options = {
    elements: {
        line: {
            tension: 0.5
        }
    }
};

const Chart = (props) => {
    // get last n dates
  const dates = [];
  if(!props.days) {
      return '...'
  }
  for (let i = 0; i <  props.days; i++) {
    let date = moment();
    date.subtract(i, "day").format("DD-MM-YYYY");
    dates.push(date);
  }

  dates.sort((a, b) => a - b);

  const getMappedDates = (arr) => {
    const mappedDates = dates.map((date) => {
      const dataExist = arr?.find((user) => {
        return (
          Number(user._id.day) === Number(date.format("DD")) &&
          Number(user._id.month) === Number(date.format("MM")) &&
          Number(user._id.year) === Number(date.format("YYYY"))
        );
      });

      if (dataExist) {
        return { y: dataExist.count, x: dataExist.count };
      } else {
        return { y: 0, x: 0 };
      }
    });
    return mappedDates;
  };

  const formatedDates = dates.map((date) => date.format("DD MMM"));
  
    const data = {
        labels: formatedDates,
        datasets: [
            {
                label: '#Debris Detected',
                data: getMappedDates(props.data || []),
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
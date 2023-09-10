// https://www.chartjs.org/docs/4.4.0/migration/v3-migration.html ->chart.js documentation
// https://www.npmjs.com/package/react-chartjs-2/v/5.2.0  ->react-chart-js-2 documentation

import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale,
  LineController,
  LineElement, PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,  //x-axis
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices, //y-axis
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };


  return (
    <Line   //react-chart-js component  for line graph
      options={{
        responsive: true,
      }}
      data={data}
    />
  )
}

export default Chart
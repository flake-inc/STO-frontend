import * as React from "react";
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
// import Papa from 'papaparse';
import * as d3 from "d3";
import { useState, useEffect } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var time_stamp = [];
var tempobserved = [];

d3.csv("/temperature_series.csv", function (data1) {
  time_stamp.push(data1.date);
  tempobserved.push(data1.observed);
});

export default function TemperatureObserved() {
  var data = {
    labels: time_stamp,
    datasets: [
      {
        label: "Temperature Observed",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: tempobserved,
      },
    ],
  };

  return (
    <Line
      data={data}
      // width={100}
      height={150}
      width={200}
      options={{
        // maintainAspectRatio: false
        scales: {
          xAxis: [
            {
              type: "time",
              ticks: {
                autoSkip: true,
                maxTicksLimit: 50,
              },
            },
          ],
        },
      }}
    />
  );
}

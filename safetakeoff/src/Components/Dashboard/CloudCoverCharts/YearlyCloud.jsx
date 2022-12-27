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

import axios from "axios";

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

export default function YearlyCloud() {
  const [lineData, set_lineData] = useState({ datasets: [] });
  const [lineOptions, set_lineOptions] = useState({});

  useEffect(() => {
    //   Normal and Anomaly Doughnut chart setup using useeffect
    const position = "left"; // CSS for graphs

    axios
      .get("http://127.0.0.1:5000/yearlyavg", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;

        set_lineData({
          labels: res.year,
          datasets: [
            {
              // label: "# of Votes",
              data: res.cloud,
              backgroundColor: [
                "rgba(255, 0, 200, 1)",
                "rgba(50, 0, 253, 0.6)",
              ],
              //   borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    set_lineOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: position },

        title: {
          display: true,
          text: "Average Yearly Cloud Cover",
          position: "bottom",
        },
      },
    });
  }, []);
  return <Line data={lineData} options={lineOptions} />;
}

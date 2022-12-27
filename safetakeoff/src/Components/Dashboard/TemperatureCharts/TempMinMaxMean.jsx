import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  zoomPlugin,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TempMinMaxMean = () => {
  const [lineData, set_lineData] = useState({ datasets: [] });
  const [lineOptions, set_lineOptions] = useState({});

  useEffect(() => {
    //   Normal and Anomaly Doughnut chart setup using useeffect
    const position = "top"; // CSS for graphs

    axios
      .get("http://127.0.0.1:5000/barchart", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;

        set_lineData({
          labels: res.date,
          datasets: [
            {
              label: "Average Temperature",
              data: res.temp,
              borderColor: "#ff0000",
              borderWidth: 3,
              fill: true,

              backgroundColor: ["rgba(54, 162, 235, 1)"],
              //   borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
            },
            {
              label: "Minimum Temperature",
              data: res.mintemp,
              backgroundColor: ["rgba(255, 99, 132, 1)"],
              borderColor: "#6a5acd",
              borderWidth: 3,
              //   borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
            },
            {
              label: "Maximum Temperature",
              data: res.maxtemp,
              backgroundColor: ["rgba(114, 245, 71, 0.5)"],
              borderColor: "#914887",
              borderWidth: 3,
              //   borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
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
      // responsive: true,
      // maintainAspectRatio: false,

      plugins: {
        legend: { display: true, position: position },

        title: {
          display: true,
          text: " Temperature",
          position: "bottom",
        },

        zoom: {
          pan: {
            enabled: true,
            mode: "x",
          },
          zoom: {
            pinch: {
              enabled: true, // Enable pinch zooming
            },
            wheel: {
              enabled: true, // Enable wheel zooming
            },
            mode: "x",
            drag: {
              enabled: true,
            },
          },
        },
      },

      scales: {
        x: {
          ticks: {
            fontSize: 12,
            display: true,
            // autoSkip:false,
          },
        },
        yAxes: [
          {
            ticks: {
              fontSize: 12,
              beginAtZero: true,
            },
          },
        ],
      },
    });
  }, []);

  return <Bar data={lineData} options={lineOptions} />;
};

export default TempMinMaxMean;

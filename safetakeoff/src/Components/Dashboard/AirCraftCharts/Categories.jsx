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

export default function AirCraftCategories() {
  const [lineData, set_lineData] = useState({ datasets: [] });
  const [lineOptions, set_lineOptions] = useState({});

  useEffect(() => {
    const position = "top";

    axios
      .get("http://127.0.0.1:5000/aircraftsdata", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;

        set_lineData({
          labels: res.Model,
          datasets: [
            {
              label: "Temperature Threshold",
              data: res.Temperature_t,
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 3,
              backgroundColor: ["rgba(54, 162, 235, 1)"],
            },
            {
              label: "WindSpeed Threshold",
              data: res.Wind_t,
              backgroundColor: ["#0a0a23"],
              borderColor: "#0a0a23",
              borderWidth: 3,
            },
            {
              label: "Total Cloud Cover Threshold",
              data: res.Cloud_t,
              backgroundColor: ["rgba(255, 99, 132, 1)"],
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 3,
            },
            {
              label: "Relative Humidity Threshold",
              data: res.humidity_t,
              backgroundColor: ["rgba(114, 245, 71, 0.5)"],
              borderColor: "rgba(114, 245, 71, 0.5)",
              borderWidth: 5,
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
      plugins: {
        legend: { display: true, position: position },

        title: {
          display: true,
          text: " Aircrafts thresholds",
          position: "bottom",
        },
        zoom: {
          pan: {
            enabled: true,
            mode: "x",
          },
          zoom: {
            pinch: {
              enabled: false, // Enable pinch zooming
            },
            wheel: {
              enabled: false, // Enable wheel zooming
            },
            mode: "x",
            drag: {
              enabled: false,
            },
          },
        },
      },

      scales: {
        x: {
          ticks: {
            fontSize: 4,
            display: true,
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

  return <Bar data={lineData} options={lineOptions} height={50} width={200} />;
}

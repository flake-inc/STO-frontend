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
import { Line } from "react-chartjs-2";
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

export default function AirCraftCloudChart() {
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
                label: "Total Cloud Cover Threshold",
                data: res.Cloud_t,
                backgroundColor: ["#0a0a23"],
                borderColor: "#0a0a23",
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
      plugins: {
        legend: { display: true, position: position },

        title: {
          display: false,
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

  return <Line data={lineData} options={lineOptions} height={50} width={200} />;
}

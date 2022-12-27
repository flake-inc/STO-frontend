import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Filler
);

const Pressureseries = () => {
  const [lineData, set_lineData] = useState({ datasets: [] });
  const [lineOptions, set_lineOptions] = useState({});

  useEffect(() => {
    //   Normal and Anomaly Doughnut chart setup using useeffect
    const position = "left"; // CSS for graphs

    axios
      .get("http://127.0.0.1:5000/pressurepred", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;

        set_lineData({
          labels: res.ds,
          datasets: [
            {
              data: res.yhat1,
              backgroundColor: ["#FF0000", "#0a0a23"],
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
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: position },

        title: {
          display: true,
          text: "Predicted Mean Sea Level Pressure",
          position: "bottom",
        },
      },
    });
  }, []);

  return <Line data={lineData} options={lineOptions} height={50} width={200} />;
};

export default Pressureseries;

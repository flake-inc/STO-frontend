
// import "./exploratory-analysis.scss";

import React, { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
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

const YearlyTemp1 = () => {
  const [lineData, set_lineData] =
    useState({ datasets: [] });
  const [lineOptions, set_lineOptions] =
    useState({});


  useEffect(() => {
    //   Normal and Anomaly Doughnut chart setup using useeffect
    const position = "left"; // CSS for graphs

    axios.get('http://127.0.0.1:5000/test',{
        headers: {
            'Content-Type': 'application/json',
        },
    })
      .then((response) => {
        const res = response.data;
        console.log(res.year)

        set_lineData({
          labels: res.year,
          datasets: [
            {
              // label: "# of Votes",
              data: res.temp,
              backgroundColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
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
          text: "Average Yearly Temperature",
          position: "bottom",
        },
      },
    });

    
         
  }, []);

  return (
    
          
              <Line
                data={lineData}
                options={lineOptions}
              />
           

        
  );
};

export default YearlyTemp1;

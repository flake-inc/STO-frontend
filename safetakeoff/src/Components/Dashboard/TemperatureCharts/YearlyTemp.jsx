import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import {Line} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';
// import Papa from 'papaparse';
import { useState, useEffect } from "react";
import axios from "axios";


import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler)



var year=[]
var temperature=[]

var yearlytemp =[]
// d3.csv("/weatherdata.csv").then(function(data) {
//     console.log(data[0]);
//   });
// d3.csv("/weather1.csv", function(data) {
//   console.log("Hello")


// //   user.push(data.user);
//   timestamp.push(data.date);
//   temperature.push(data.temperature);

// //   systems.push(data.temperature)
// //   console.log(data);
// //   for (var i = 0; i < data.length; i++) {
// //     console.log(data[i].user);
// //     console.log(data[i].systems);
// // }
// });

// d3.csv("/yearlytemp.csv", function(data1) {


// //   user.push(data.user);
//   year.push(data1.year);
//   yearlytemp.push(data1.temperature);

// //   systems.push(data.temperature)
// //   console.log(data);
// //   for (var i = 0; i < data.length; i++) {
// //     console.log(data[i].user);
// //     console.log(data[i].systems);
// // }
// });

// style={{
//   display: "inline-block",
//   fontSize: 14,
//   fontStyle: "bold",
//   backgroundColor: "#0a0a23",
//   color: "#fff",
//   borderRadius: "10px",
//   boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
//   transition: "0.25w",
// }}





export default function YearlyTemp(){
  // var dataset;
  const [weatherdata,setWeatherdata] = useState(null)

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    // fetch("/api/v1/user/weather").then((res) =>
    //     res.json().then((data) => {
    //         // Setting a data from api
    //         console.log("Niru")
    //         console.log(data)
    //         setWeatherdata(data);
    //         console.log(weatherdata)
    //     })
    // );
    axios.get('http://127.0.0.1:5000/test',{
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res)=>{
        let s = res.data 
        year= s.map(function(elem){
          return elem.year;
        })
        temperature= s.map(function(elem){
          return elem.temperature;
        })
        console.log(s)
        console.log(year)
        console.log(temperature)


    })
}, []);
  // console.log("hello")

//   useEffect(() => {
//     // Using fetch to fetch the api from 
//     // flask server it will be redirected to proxy
//     fetch("/data").then((res) =>
//         res.json().then((data) => {
//             // Setting a data from api
//             console.log(data)
//         })
//     );
// }, []);


  
  var data = {
    labels: year,
    datasets: [
      {
        label: 'Yearly Average Temperature',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(10, 10, 35, 0.4)',
        borderColor: 'rgba(10, 10, 35, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(10, 10, 35, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(10, 10, 35, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: temperature
      }
    ]
  };
  return <Line
        data={data}
        height={100}
        width={200}
        options={{
          // maintainAspectRatio: false
          scales: {
            xAxis: [{
              type: 'year',
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 50
              }
          }]
        }
        }}
      /> ;

  }

// function drawChart2(){
//   var data = {
//     labels: month,
//     datasets: [
//       {
//         label: 'Monthly Average Temperature',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: monthlytemp
//       }
//     ]
//   };
//   return <Line
//         data={data}
//        height={400}
//        width={600}
//         options={{
//           responsive:false,
//           maintainAspectRatio: false
          
//         }}
//       /> ;
// }
  
// export default function YearlyTemp() {

  

//   return (
 
//     <div>
           
        
//         {/* {drawChart()} */}
//         {drawChart()}
//         {/* <Line
//           data={data}
//         //   width={50}
//         //   height={50}
//           options={{
//             // maintainAspectRatio: false
//           }}
//         /> */}
//         {/* <canvas id="chart"></canvas> */}
//       </div>
    
   
//   );
// }
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import {Line} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';
// import Papa from 'papaparse';
import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler)



var time_stamp=[]
var temperature =[]


d3.csv("/temperature_seasonal1.csv", function(data1) {
  
  time_stamp.push(data1.date);
  temperature.push(data1.temperature);


});

export default function TimevsTemperature(){
  
  var data = {
    labels: time_stamp,
    datasets: [
      {
        label: 'Temperature Change over the Years',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(10, 10, 35,0.4)',
        borderColor: 'rgba(10, 10, 35,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(10, 10, 35,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(10, 10, 35,1)',
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
        // width={100}
        height={120}
        width={200}
        options={{
          // maintainAspectRatio: false
          scales: {
            xAxis: [{
              type: 'time',
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 50
              }
          }]
        }
        }}
      /> ;

  }


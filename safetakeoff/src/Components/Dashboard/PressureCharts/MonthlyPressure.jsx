import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import {Line} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';
// import Papa from 'papaparse';
import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler)



var month =[]
var monthlypressure =[]


d3.csv("/monthlypressure.csv", function(data1) {
  console.log("Hi")


//   user.push(data.user);
  month.push(data1.Month);
  monthlypressure.push(data1.mean_sea_level_pressure);
  console.log(month)


});







export default function MonthlyPressure(){
  var data = {
    labels: month,
    datasets: [
      {
        label: 'Monthly Average Pressure',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: monthlypressure
      }
    ]
  };
  return <Line
  data={data}
  // width={100}
  height={100}
  width={200}
  options={{
    // maintainAspectRatio: false
    scales: {
      xAxis: [{
        type: 'month',
        ticks: {
            autoSkip: true,
            maxTicksLimit: 50
        }
    }]
  }
  }}
          
        
      /> ;
}
  
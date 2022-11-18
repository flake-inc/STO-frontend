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
var monthlytemp =[]



d3.csv("/monthtemp.csv", function(data1) {
  month.push(data1.month);
  monthlytemp.push(data1.temperature);

});







export default function MonthlyAvgTemp(){
  var data = {
    labels: month,
    datasets: [
      {
        label: 'Monthly Average Temperature',
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
        data: monthlytemp
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
  

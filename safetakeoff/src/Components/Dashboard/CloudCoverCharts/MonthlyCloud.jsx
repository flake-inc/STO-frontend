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
var monthlycloud =[]


d3.csv("/monthlycloud.csv", function(data1) {


//   user.push(data.user);
  month.push(data1.Month);
  monthlycloud.push(data1.total_cloud_cover);

});


export default function MonthlyCloud(){
  var data = {
    labels: month,
    datasets: [
      {
        label: 'Monthly Average Cloud Cover',
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
        data: monthlycloud
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
  

import * as React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';
import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler)

var time_stamp=[]
var temptrend =[]

d3.csv("/cloud_series.csv", function(data1) {
    time_stamp.push(data1.date);
    temptrend.push(data1.trend);  
  });


export default function CloudTrend(){
  
  var data = {
    labels: time_stamp,
    datasets: [
      {
        label: 'Cloud Cover Trend ',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: '#6a5acd',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#914887',
        pointBackgroundColor: 'rgba(114, 245, 71, 0.5)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#914887',
        pointHoverBorderColor: '#914887',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: temptrend
      }
    ]
  };

  return <Line
        data={data}
        height={50}
        width={200}
        options={{
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


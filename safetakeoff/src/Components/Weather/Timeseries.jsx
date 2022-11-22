import * as React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';
import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler)

var time_stamp=[]
var temptrend =[]
var windtrend =[]
var cloudtrend =[]
var pressuretrend =[]

d3.csv("/temperature_series.csv", function(data1) {
    time_stamp.push(data1.date);
    temptrend.push(data1.trend);  
  });

  // d3.csv("/windspeed_series.csv", function(data2) {
  //   windtrend.push(data2.trend);  
  // });
  // d3.csv("/cloud_series.csv", function(data3) {
  //   cloudtrend.push(data3.trend);  
  // });
  // d3.csv("/pressure_series.csv", function(data4) {
  //   pressuretrend.push(data4.trend);  
  // });


export default function TempSeries(){
  
  var data = {
    labels: time_stamp,
    datasets: [
      {
        label: 'Temperature Trend ',
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


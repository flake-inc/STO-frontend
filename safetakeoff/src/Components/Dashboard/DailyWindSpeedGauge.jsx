import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';

import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';


// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Wind Speed",
    captionpadding: "0",
    origw: "320",
    origh: "300",
    gaugeouterradius: "115",
    gaugestartangle: "270",
    gaugeendangle: "-25",
    showvalue: "1",
    valuefontsize: "20",
    majortmnumber: "13",
    majortmthickness: "2",
    majortmheight: "13",
    minortmheight: "7",
    minortmthickness: "1",
    minortmnumber: "1",
    showgaugeborder: "0",
    theme: "fusion"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "20.5",
        code: "#999999"
      },
      {
        minvalue: "0",
        maxvalue: "280",
        code: "#F6F6F6"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "20.5",
        bgcolor: "#F20F2F",
        tooltext: "20.5kmph",

        basewidth: "5",
        x:"$gaugeCenterX",
        y: "$gaugeCenterY + 70",
      }
    ]
  },
  annotations: {
    groups: [
      {
        items: [
          {
            type: "text",
            id: "text",
            text: "kmph",
            x: "$gaugeCenterX",
            y: "$gaugeCenterY + 50",
            fontsize: "10",
            color: "#555555"
          }
        ]
      }
    ]
  }
};

export default class WindSpeed extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="angulargauge"
        width="400"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

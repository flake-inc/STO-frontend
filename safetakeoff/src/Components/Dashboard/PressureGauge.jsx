
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
    caption: "Pressure",
    captionontop: "1",
    origw: "380",
    origh: "260",
    gaugestartangle: "135",
    gaugeendangle: "45",
    gaugeoriginx: "190",
    gaugeoriginy: "220",
    gaugeouterradius: "160",
    theme: "fusion",
    showvalue: "1",
    numbersuffix: " MPa",
    valuefontsize: "20"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "0.1",
        code: "#62B58F"
      },
      {
        minvalue: "0.1",
        maxvalue: "0.2",
        code: "#FFC533"
      },
      {
        minvalue: "0.2",
        maxvalue: "0.3",
        code: "#F2726F"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "0.17",
        tooltext: "Moderate Pressure"
      }
    ]
  }
};

export default class Pressure extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="angulargauge"
        width="200"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

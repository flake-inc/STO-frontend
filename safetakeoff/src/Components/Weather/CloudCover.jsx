import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Cloud Cover",
    lowerlimit: "0",
    upperlimit: "100",
    showvalue: "1",
    numbersuffix: "%",
    theme: "fusion",
    valuefontsize: "20",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#62B58F",
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533",
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#F2726F",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: "71",
        tooltext: "<b>9%</b> lesser that target",
      },
    ],
  },
};

export default class CloudCover extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="angulargauge"
        width="150"
        height="200"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

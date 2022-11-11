import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);


// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Temp",
    lowerlimit: "-20",
    upperlimit: "50",
    numbersuffix: "°C",
    thmfillcolor: "#008ee4",
    showgaugeborder: "1",
    gaugebordercolor: "#008ee4",
    gaugeborderthickness: "2",
    plottooltext: "Temperature: <b>$datavalue</b> ",
    theme: "fusion",
    showvalue: "1",
    showBorder: "0",
    canvasBgAlpha: "0",
    showAlternateHgridColor: "1",
        //Background image properties
    // bgImage: "https://i.gifer.com/7Ik1.gif",
    //     //Background image transparency 
    // bgImageAlpha: "75",
    // bgImageDisplayMode: "stretch",

  },
  value: "25.5"
};

export default class Thermo extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="thermometer"
        width="150"
        height="300"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
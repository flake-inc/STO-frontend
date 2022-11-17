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
        code: "#62B58F"

      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533"
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#F2726F"

      }
    ]
  },
  dials: {
    dial: [
      {
        value: "71",
        tooltext: "<b>9%</b> lesser that target"
      }
    ]
  },
//   trendpoints: {
//     point: [
//       {
//         startvalue: "80",
//         displayvalue: "Target",
//         thickness: "2",
//         color: "#E15A26",
//         usemarker: "1",
//         markerbordercolor: "#E15A26",
//         markertooltext: "80%"
//       }
//     ]
//   }
};

export default class CloudCover extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="angulargauge"
        width="300"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

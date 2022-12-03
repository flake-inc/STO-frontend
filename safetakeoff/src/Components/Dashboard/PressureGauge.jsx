import React from "react";
import { Chart } from "react-google-charts";

const styles = {
  dial: {
    
    width: `200px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "0.7em",
    color: "#000",
    marginTop: '40px'
  }
};

const Barometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <Chart
        height={160}
        chartType="Gauge"
        loader={<div></div>}
        data={[
          ["Label", "Value"],
          ["", Number(value)]
        ]}
        options={{
          redFrom: 103000,
          redTo: 105000,
          yellowFrom:101000,
          yellowTo: 103000,
          minorTicks: 5,
          min: 95000,
          max: 105000
        }}
      />
       <div style={styles.title}>
        {title}: {value} Pa
      </div>
    </div>
  );
};

export default Barometer;

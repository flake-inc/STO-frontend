import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "0.7em",
    marginLeft: '100px',
    color: "#000"
  }
};

const WindGauge = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        maxValue={120}
        minValue={0}
        height={190}
        width={290}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default WindGauge;

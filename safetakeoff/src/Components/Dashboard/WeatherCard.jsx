import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import {
  WiCloud,
  WiThermometer,
  WiWindy,
  WiBarometer,
  WiDayCloudyWindy,
} from "react-icons/wi";

export default function WeatherCard(data) {
  const [row, setrow] = useState(data);
  var temp = parseFloat(row.temperature).toFixed(2);
  var wind = parseFloat(row.wind).toFixed(2);
  var pressure = parseFloat(row.pressure).toFixed(2);
  var cloud = parseFloat(row.cloud).toFixed(2);
  return (
    <MDBContainer className="weathercard">
      <MDBRow>
        <MDBCol>
          <MDBCard>
            {/*  */}
            <MDBCardBody>
              <div>
                <p className="cardtext">{row.time}</p>
                <p className="cardtext">
                  <WiThermometer /> {temp} °C
                </p>
                <p className="cardtext">
                  <WiWindy /> {wind} m/s
                </p>
                <p className="cardtext">
                  <WiBarometer /> {pressure} Pa
                </p>
                <p className="cardtext">
                  <WiCloud /> {cloud}
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

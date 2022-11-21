import React from "react";
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
import { WiCloud, WiThermometer,WiWindy, WiBarometer,WiDayCloudyWindy } from "react-icons/wi";


export default function WeatherCard(time,temp,wind_speed,pressure,cloud) {
  return (
    <section className="vh-60" >
      <MDBContainer className="weathercard" >
        <MDBRow className="rowclass">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "10px" }}>
              <MDBRipple
                tag="div"
                className="bg-image"
                rippleColor="dark"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <MDBCardImage
                  src="https://images.template.net/wp-content/uploads/2016/06/27115844/Sunny-Weather-Icon.jpg"
                  width={100}/>
                <div
                  // className="mask"
                  style={{ backgroundColor: "rgba(0,0,0,.45)" }}
                >
                  <div className="d-flex justify-content-between p-4">
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="chevron-left" size="lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="cog" size="sm" />
                    </a>
                  </div>
                 
                </div>
              </MDBRipple>
              <MDBCardBody className="p-4 text-center">
                <a href="#!" className="text-body">
                  <MDBIcon fas icon="chevron-up mb-4" size="lg" />
                </a>
                <div >
                  <p >00:00</p>
                  <p className="h5 fw-normal">
                    <WiThermometer /> 23°C
                  </p>
                  <p className="h5 fw-normal">
                    <WiWindy /> 4kmph
                  </p><p className="h5 fw-normal">
                    <WiBarometer /> 100MPa
                  </p><p className="h5 fw-normal">
                    <WiCloud /> 75%
                  </p>
                </div>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
     </section>
  );
}
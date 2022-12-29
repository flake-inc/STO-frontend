import React from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import vid from "../../Assets/large_aviation.mp4";
import Paper from "@mui/material/Paper";
import MainCard from "../MainCard";
import Cards from "../Dashboard/cards";
import CardContent from "@mui/material/CardContent";

import { Box, Grid, Typography } from "@mui/material";

import TempSeries from "./Tempseries";
import { useLocation } from "react-router-dom";
import Cloudseries from "./Cloudseries";
import Pressureseries from "./Pressureseries";
import Windseries from "./Windseries";
import { useSelector, useDispatch } from "react-redux";
import WeatherCard from "../Dashboard/WeatherCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import StaffAppbar from "../Dashboard/staffappbar";

function Userselect(usertype) {
  if (usertype.usertype == "admin") {
    return <ResponsiveAppBar />;
  } else {
    return <StaffAppbar />;
  }
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default function WeatherPredictGeneral() {
  const date1 = useSelector((state) => state.date.date);
  const option1 = String(useSelector((state) => state.date.option));
  const usertype = sessionStorage.getItem("usertype");
  const date2 = date1.slice(0, 16);
  const date3 = formatDate(new Date(date2.slice(5, 16)));
  const [preddata, setpreddata] = useState([]);
  const [tempmean, settempmean] = useState([]);
  const [cloudmean, setcloudmean] = useState([]);
  const [pressuremean, setpressuremean] = useState([]);
  const [windmean, setwindmean] = useState([]);
  const [tempth, settempth] = useState([]);
  const [cloudth, setcloudth] = useState([]);
  const [pressureth, setpressureth] = useState([]);
  const [windth, setwindth] = useState([]);
  const [isDangered, setIsDangered] = useState([]);

  useEffect(() => {
    const access_token = sessionStorage.getItem("token");
    console.log("access_token", access_token);

    if (access_token === null) {
      navigate("/login");
    }

    axios
      .get("http://127.0.0.1:5000/getdaypred", {
        params: {
          date: date3,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;

        // setTemperature(...temperature,res.temp)
        // setWind(...wind,res.wind)
        // setCloud(...cloud,res.cloud)
        // setPress(...press,res.press)
        // setdate(...time,res.time)
        setpreddata(...preddata, res);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.data.msg === "Token has expired") {
            navigate("/login");
          }
        }
      });
  }, []);

  useEffect(() => {
    const access_token = sessionStorage.getItem("token");

    if (access_token === null) {
      navigate("/login");
    }

    axios
      .get("http://127.0.0.1:5000/getcomparison", {
        params: {
          date: date3,
          aircraft: option1,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        settempmean(res.t_mean);
        setcloudmean(res.c_mean);
        setwindmean(res.w_mean);
        setpressuremean(res.p_mean);
        settempth(res.t_th);
        setwindth(res.w_th);
        setcloudth(res.c_th);
        setpressureth(res.p_th);
        setIsDangered(res.dangered);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.data.msg === "Token has expired") {
            navigate("/login");
          }
        }
      });
  }, []);

  const { state } = useLocation();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = date1.slice(0, 16);

  return (
    <div className="bg-image shadow-4-strong">
      <div
        className="visual"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          objectFit: "cover",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: "#F3F2F3",
        }}
      >
        <video
          id="idle_video"
          autoplay=""
          muted="true"
          playsinline
          loop
          className="active"
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      <Userselect usertype={usertype} />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, pt: 3, pb: 3 }}>
          {/* Hero unit */}
          <Paper
            sx={{
              margin: "auto",
              overflow: "hidden",
              opacity: 0.9,
              pt: 3,
              pb: 3,
              flex: 1,
              py: 6,
              px: 4,
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Prediction for <strong>{option1}</strong> on <strong>{date}</strong>
            </Typography>
            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <MainCard className="weathercontainer">
                {/* <Cards  /> */}

                <div
                  className="cardcontainer"
                  spacing={5}
                  style={{ height: "250px" }}
                >
                  {preddata.map((row) => (
                    <WeatherCard
                      style={{ width: "200px" }}
                      time={row.time}
                      temperature={row.temperature}
                      cloud={row.cloudcover}
                      wind={row.windspeed}
                      pressure={row.pressure}
                    />
                  ))}
                </div>
              </MainCard>
            </Grid>

            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <Grid item xs={3} direction="column"></Grid>

              <Grid item xs={3} direction="column">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    marginBottom={3}
                  >
                    <strong>{option1}</strong> Aircraft's Threshold Values
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Temperature Threshold : {tempth}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Wind Threshold : {windth}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cloud Threshold : {cloudth}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Pressure Threshold : {pressureth}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={4} direction="column">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    marginBottom={3}
                  >
                    Average weather condition on <strong>{date}</strong>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Temperature Average : {tempmean}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Wind Average : {windmean}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cloud Average : {cloudmean}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Pressure Average : {pressuremean}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2} direction="column"></Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <Grid item xs={12} md={12} lg={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <Grid item>
                    {isDangered ? (
                      <div>
                        <Typography
                          component="h3"
                          variant="h3"
                          align="center"
                          color="text.primary"
                          paddingTop={5}
                          gutterBottom 
                        >
                          The AirCraft <strong>{option1}</strong>
                          <Typography
                            component="h3"
                            variant="h3"
                            align="center"
                            color="red"
                          >
                            Cannot
                          </Typography>
                          land/takeoff on {date}!{" "}
                        </Typography>

                        <Typography
                          sx={{ mb: 1.5, fontSize: 14 }}
                          color="text.secondary"
                          align="center"

                        >
                          The Predicted weather conditions are higher than the <strong>{option1}</strong>'s
                          threshold values. Hence the <strong>{option1}</strong> is endangered by
                          the weather. We are suggesting not to land or take off{" "}
                          <strong>{option1}</strong> on {date3}.
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: 11 }}
                          color="text.secondary"
                          align="center"

                        >
                          (*Please consider that the mean (average) of all
                          predicted weather conditions on {date3} are
                          considered. There can be an hour of that day the{" "}
                          <strong>{option1}</strong> can be land/takeoff without any harm.
                          Therefore please compare the <strong>{option1}</strong>'s threshold
                          values with each hourly prediction)
                        </Typography>
                      </div>
                    ) : (
                      <div>
                        <Typography
                          component="h3"
                          variant="h3"
                          align="center"
                          color="text.primary"
                          paddingTop={5}
                          gutterBottom
                        >
                          The AirCraft <strong>{option1}</strong>
                          <Typography
                            component="h3"
                            variant="h3"
                            align="center"
                            color="green"
                          >
                            Can 
                          </Typography>
                          land/takeoff on {date}!{" "}
                        </Typography>

                        <Typography
                          sx={{ mb: 1.5, fontSize: 14 }}
                          color="text.secondary"
                          align="center"

                        >
                          The Predicted weather conditions are lower than the <strong>{option1}</strong>'s
                          threshold values. Hence the <strong>{option1}</strong> is not
                          endangered by the weather. Therefore it is okay to
                          land or take off <strong>{option1}</strong> on {date3}.
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: 11 }}
                          color="text.secondary"
                          align="center"

                        >
                          (*Please consider that the mean (average) of all
                          predicted weather conditions on {date3} are
                          considered. There can be an hour of that day the{" "}
                          <strong>{option1}</strong> cannot be land/takeoff without any harm.
                          Therefore please compare the <strong>{option1}</strong>'s threshold
                          values with each hourly prediction.)
                        </Typography>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <Grid
                item
                md={8}
                sx={{ display: { sm: "none", md: "block", lg: "none" } }}
              />

              {/* row 2 */}
              <Grid item xs={12} md={12} lg={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="text.primary"
                      paddingTop={5}
                      gutterBottom
                    >
                      Temperature Prediction
                    </Typography>
                  </Grid>
                  <TempSeries />
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="text.primary"
                      paddingTop={5}
                      gutterBottom
                    >
                      Total Cloud Cover Prediction
                    </Typography>
                  </Grid>
                  <Cloudseries />
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="text.primary"
                      paddingTop={5}
                      gutterBottom
                    >
                      Mean Sea Level Pressure Prediction
                    </Typography>
                  </Grid>
                  <Pressureseries />
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      color="text.primary"
                      paddingTop={5}
                      gutterBottom
                    >
                      Wind Speed Prediction
                    </Typography>
                  </Grid>
                  <Windseries />
                </Grid>
              </Grid>
            </Grid>
            <hr />
          </Paper>
        </Box>
        <StickyFooter />
      </Box>
    </div>
  );
}

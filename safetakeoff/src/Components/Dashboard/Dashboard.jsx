import React from "react";
import { useState, useEffect } from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "./ResponsiveAppBar";
import axios from "axios";
import AnalyticEcommerce from "../../utils/AnalyticEcommerce";
import WeatherCard from "./WeatherCard";
import vid from "../../Assets/large_aviation.mp4";
import Paper from "@mui/material/Paper";
import Cards from "./cards";
import YearlyTemp1 from "./TemperatureCharts/yearlytemp1";

import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  CardHeader,
  IconButton,
  ButtonGroup,
  Avatar,
  Card,
  Typography,
} from "@mui/material";

import TempGauge from "./dailytempgauge";
import WindGauge from "./DailyWindSpeedGauge";
import PressureGauge from "./PressureGauge";
import CloudCover from "./CloudCover";
import MonthlyTemp from "./TemperatureCharts/MonthlyAvgTemp";
// import YearlyTemp from "./TemperatureCharts/YearlyTemp";
import TimevsTemperature from "./TemperatureCharts/TimevsTemperature";
import MonthlyAvgWindSpeed from "./WindSpeedCharts/MonthlyAverageWindSpeed";
import YearlyWind from "./WindSpeedCharts/YearlyWind";
import MonthlyCloud from "./CloudCoverCharts/MonthlyCloud";
import YearlyCloud from "./CloudCoverCharts/YearlyCloud";
import MonthlyPressure from "./PressureCharts/MonthlyPressure";
import YearlyPressure from "./PressureCharts/YearlyPressure";
import MainCard from "../MainCard";
import AirCraftPieChart from "./AirCraftCharts/AirCraftPieChart";
import AirCraftCategories from "./AirCraftCharts/Categories";

import TempTrend from "./TemperatureCharts/TempTrend";
import CloudTrend from "./CloudCoverCharts/CloudCoverTrend";
import PressureTrend from "./PressureCharts/PressureTrend";
import WindTrend from "./WindSpeedCharts/WindTrend";

import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import TempSeasonal from "./TemperatureCharts/TempSeasonal";
import TemperatureObserved from "./TemperatureCharts/TemperatureObserved";
import TempMinMaxMean from "./TemperatureCharts/TempMinMaxMean";
import WindMinMaxMean from "./WindSpeedCharts/WindMinMaxMean";
import CloudMinMaxMean from "./CloudCoverCharts/CloudMinMaxMean";
import PressMinMaxMean from "./PressureCharts/PressMinMaxMean";
import DangeredTable from "./Table";

// sales report status
const status = [
  {
    value: "trend",
    label: "Trend",
  },
  {
    value: "seasonal",
    label: "Seasonal",
  },
  {
    value: "observed",
    label: "Observed",
  },
];

function DashboardContent() {
  const [value, setValue] = useState("trend");
  const [slot, setSlot] = useState("month");
  const [feature, setFeature] = useState("Temperature");
  const [time, settime] = useState([]);

  const [temperature, setTemperature] = useState([]);
  const [wind, setWind] = useState([]);
  const [press, setPress] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [preddata, setpreddata] = useState([]);

  const today = formatDate(new Date());
  console.log(today);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    //   Normal and Anomaly Doughnut chart setup using useeffect

    axios
      .get("http://127.0.0.1:5000/getpred", {
        headers: {
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
        }
      });
  }, []);
  // console.log(time)
  // console.log(temperature)
  // console.log(cloud)
  // console.log(press)
  console.log(preddata);

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

      <ResponsiveAppBar />

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
              Today Overview
            </Typography>
            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className="Gauges"
              >
                <Grid item sx={{ mx: "auto" }}>
                  <TempGauge />
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <WindGauge />
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <CloudCover />
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <PressureGauge />
                </Grid>
              </Stack>

              <Grid sx={{ p: 3, pb: 0 }}>
                <Statistics feature={feature} />
              </Grid>

              <Grid
                item
              >
          
             
                <Grid
                  item
                  style={{
                    width: "100",
                    height: "400",
                  }}
                >
                  <Typography
                    component="h5"
                    variant="h5"
                    marginBottom={3}
                    align="center"
                    color="text.primary"
                  >
                    Dangered Aircrafts Today!
                  </Typography>

                <DangeredTable />
              </Grid>
                  <Card>
                    <CardHeader
                      avatar={<Avatar>:-</Avatar>}
                      title="R44 RAVEN I"
                      subheader="A flexbox with avatar, title, subtitle and action"
                    />
                  </Card>

                  <Card>
                    <CardHeader
                      avatar={<Avatar>:-</Avatar>}
                      title="CARBON CUB FX3"
                      subheader="A flexbox with avatar, title, subtitle and action"
                    />
                  </Card>

                  <Card>
                    <CardHeader
                      avatar={<Avatar>:-</Avatar>}
                      title="CC11-160 CARBON CUB SS"
                      subheader="A flexbox with avatar, title, subtitle and action"
                    />
                  </Card>

                  <Card>
                    <CardHeader
                      avatar={<Avatar>:-</Avatar>}
                      title="CARBON CUB FX3"
                      subheader="A flexbox with avatar, title, subtitle and action"
                    />
                  </Card>
                </Grid>
                
            </Grid>

            <MainCard className="weathercontainer" content={false}>
                  {/* <Cards  /> */}

                  <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="text.secondary"
                    paddingTop={5}
                    gutterBottom
                  >
                    Weather Conditions for last 24 Hours
                  </Typography>
                  <div
                    className="cardcontainer"
                    spacing={5}
                    style={{ height: "200px" }}
                  >
                    {console.log()}
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

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <Typography
                component="h3"
                variant="h3"
                marginBottom={3}
                align="center"
                color="text.primary"
              >
                Select the feature:
              </Typography>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  onClick={() => setFeature("Temperature")}
                  color={feature === "Temperature" ? "primary" : "secondary"}
                  variant={feature === "Temperature" ? "outlined" : "text"}
                >
                  Temperature
                </Button>
                <Button
                  onClick={() => setFeature("Windspeed")}
                  color={feature === "Windspeed" ? "primary" : "secondary"}
                  variant={feature === "Windspeed" ? "outlined" : "text"}
                >
                  Windspeed
                </Button>
                <Button
                  onClick={() => setFeature("CloudCover")}
                  color={feature === "CloudCover" ? "primary" : "secondary"}
                  variant={feature === "CloudCover" ? "outlined" : "text"}
                >
                  CloudCover
                </Button>
                <Button
                  onClick={() => setFeature("Pressure")}
                  color={feature === "Pressure" ? "primary" : "secondary"}
                  variant={feature === "Pressure" ? "outlined" : "text"}
                >
                  Pressure
                </Button>
              </ButtonGroup>
            </Box>

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
              <Grid item xs={12} md={12} lg={6}>
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
                      Average {feature}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Button
                        size="small"
                        onClick={() => setSlot("month")}
                        color={slot === "month" ? "primary" : "secondary"}
                        variant={slot === "month" ? "outlined" : "text"}
                        style={{
                          fontSize: 14,
                          fontStyle: "bold",
                          backgroundColor: "#0a0a23",
                          color: "#fff",
                          borderRadius: "10px",
                          boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                          transition: "0.25w",
                        }}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot("year")}
                        color={slot === "year" ? "primary" : "secondary"}
                        variant={slot === "year" ? "outlined" : "text"}
                        style={{
                          fontSize: 14,
                          fontStyle: "bold",
                          backgroundColor: "#0a0a23",
                          color: "#fff",
                          borderRadius: "10px",
                          boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                          transition: "0.25w",
                        }}
                      >
                        Year
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>

                <MainCard content={false} sx={{ mt: 1.5 }}>
                  <GraphSelect feature={feature} slot={slot} />
                </MainCard>
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
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
                      Variation for {feature}{" "}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* <TextField
                      id="standard-select-currency"
                      size="small"
                      select
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      sx={{
                        "& .MuiInputBase-input": {
                          py: 0.5,
                          fontSize: "0.875rem",
                        },
                      }}
                    > */}
                    {/* {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))} */}
                    {/* </TextField> */}
                  </Grid>
                </Grid>

                <MainCard content={false} sx={{ mt: 1.5 }}>
                  <GraphSelect2 feature={feature} slot={slot} />
                </MainCard>
                {/* <MainCard sx={{ mt: 1.5 }}>
                  <Stack spacing={1.5} sx={{ mb: -12 }}></Stack>
                  <TempMinMaxMean />
                </MainCard> */}
              </Grid>
            </Grid>

            <GraphSelectTrend feature={feature} />

            <hr />

            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              paddingTop={5}
              gutterBottom
            >
              About Aircrafts
            </Typography>

            <AirCraftCategories />
            <AirCraftPieChart />
            <hr />
          </Paper>
        </Box>

        <StickyFooter />
      </Box>
    </div>
  );
}

function GraphSelect2({ feature, slot }) {
  switch (feature) {
    case "Temperature":
      return <TempMinMaxMean />;

    case "Windspeed":
      return <WindMinMaxMean />;

    case "CloudCover":
      return <CloudMinMaxMean />;

    case "Pressure":
      return <PressMinMaxMean />;

    default:
      return null;
  }
}

function GraphSelect({ feature, slot }) {
  switch (feature) {
    case "Temperature":
      console.log("Temp99");

      if (slot == "month") {
        return <MonthlyTemp />;
      } else {
        return <YearlyTemp1 />;
      }

    case "Windspeed":
      if (slot == "month") {
        return <MonthlyAvgWindSpeed />;
      } else {
        return <YearlyWind />;
      }

    case "CloudCover":
      if (slot == "month") {
        return <MonthlyCloud />;
      } else {
        return <YearlyCloud />;
      }

    case "Pressure":
      if (slot == "month") {
        return <MonthlyPressure />;
      } else {
        return <YearlyPressure />;
      }
    default:
      return null;
  }
}

function GraphSelectTrend({ feature }) {
  switch (feature) {
    case "Temperature":
      return <TempTrend />;

    case "Windspeed":
      return <WindTrend />;

    case "CloudCover":
      return <CloudTrend />;

    case "Pressure":
      return <PressureTrend />;

    default:
      return <TempTrend />;
  }
}

function Statistics({ feature }) {
  switch (feature) {
    case "Temperature":
      return (
        <Stack spacing={2} paddingBottom={4}>
          {/* <Typography variant="h6" color="textSecondary">
            Today's Statistics
          </Typography> */}
          <AnalyticEcommerce
            title="Maximum Temperature"
            count="34.2ºC"
            percentage={10.3}
            isLoss="true"
            extra="1.5°C"
            state="Temperature"
            event="decreases"
          />
          <AnalyticEcommerce
            title="Minimum Temperature"
            count="12.56ºC"
            percentage={7.3}
            extra="2°C"
            state="Temperature"
            event="increases"
          />

          {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
                      <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
        </Stack>
      );

    case "Windspeed":
      return (
        <Stack spacing={2} paddingBottom={4}>
          {/* <Typography variant="h6" color="textSecondary">
              Today's Statistics
            </Typography> */}
          <AnalyticEcommerce
            title="Maximum Wind Speed"
            count="4.83kmph"
            percentage={10.3}
            isLoss="true"
            extra="2kmph"
            state="Wind speed"
            event="decreases"
          />
          <AnalyticEcommerce
            title="Minimum Wind Speed"
            count="3.83kmph"
            percentage={7.3}
            extra="1kmph"
            state="Wind speed"
            event="increases"
          />

          {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
                        <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
        </Stack>
      );
    case "CloudCover":
      return (
        <Stack spacing={2} paddingBottom={4}>
          {/* <Typography variant="h6" color="textSecondary">
              Today's Statistics
            </Typography> */}
          <AnalyticEcommerce
            title="Maximum Cloud Cover"
            count="0.85"
            percentage={0.1}
            isLoss="true"
            extra="0.085"
            state="CloudCover"
            event="decreases"
          />
          <AnalyticEcommerce
            title="Minimum Cloud Cover"
            count="0.54"
            percentage={0.7}
            extra="0.02"
            state="CloudCover"
            event="increases"
          />

          {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
                        <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
        </Stack>
      );

    case "Pressure":
      return (
        <Stack spacing={2} paddingBottom={4}>
          {/* <Typography variant="h6" color="textSecondary">
              Today's Statistics
            </Typography> */}
          <AnalyticEcommerce
            title="Maximum Pressure"
            count="101111.4Pa"
            percentage={10.3}
            isLoss="true"
            extra="100Pa"
            state="Pressure"
            event="decreases"
          />
          <AnalyticEcommerce
            title="Minimum Pressure"
            count="100000Pa"
            percentage={7.3}
            extra="200"
            state="Pressure"
            event="increases"
          />

          {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
                        <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
        </Stack>
      );

    // case "Pressure":
    //     if(slot=="month"){
    //         return <MonthlyPressure/>;

    //     }else{
    //         return <YearlyPressure />;
    //     }

    default:
      return null;
  }
}

export default function Dashboard() {
  return <DashboardContent />;
}

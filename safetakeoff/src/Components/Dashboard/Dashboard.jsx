import React from "react";
import { useState, useEffect } from "react";
import Copyright from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "./ResponsiveAppBar";
import axios from "axios";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AnalyticEcommerce from "../../utils/AnalyticEcommerce";

import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";


import TempGauge from "./dailytempgauge";
import WindGauge from "./DailyWindSpeedGauge";
import PressureGauge from "./PressureGauge";
import CloudCover from "./CloudCover";
import MonthlyTemp from "./TemperatureCharts/MonthlyAvgTemp";
import YearlyTemp from "./TemperatureCharts/YearlyTemp";
import TimevsTemperature from "./TemperatureCharts/TimevsTemperature";
import MonthlyAvgWindSpeed from "./WindSpeedCharts/MonthlyAverageWindSpeed";
import YearlyWind from "./WindSpeedCharts/YearlyWind";
import MonthlyCloud from "./CloudCoverCharts/MonthlyCloud";
import YearlyCloud from "./CloudCoverCharts/YearlyCloud";
import MonthlyPressure from "./PressureCharts/MonthlyPressure";
import YearlyPressure from "./PressureCharts/YearlyPressure";
import MainCard from "../MainCard";

import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

function DashboardContent() {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("month");
  const [feature, setFeature] = useState("Temperature");

  const [articles, setArticles] = useState({
    dewpoint_temperature: 16.39,
    mean_sea_level_pressure: 101046.38,
    relative_humidity: 0.89,
    surface_solar_radiation: 287.01,
    surface_thermal_radiation: 408.35,
    temperature: 18.26,
    time_stamp: "1/1/2010 0:00",
    total_cloud_cover: 1,
    wind_speed: 2.6,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/summary").then((response) => {
      const data = response.data;
      console.log(data);
      setArticles(data);
      console.log(articles);
    });
  }, []);

  console.log(articles);

  return (
    <>
      <ResponsiveAppBar />
      {/* <Container> */}
      <Grid container justify="space-around" rowSpacing={5.5} columnSpacing={40} paddingBottom={5} paddingLeft={5}>
        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25, mt: 4 }} rowSpacing={6.5 } paddingLeft={2}>
          <Typography variant="h5">Today Overview:</Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2} >
          <TempGauge />
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <WindGauge />
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <CloudCover />
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2} spacing={2}>
          <PressureGauge />
        </Grid>
      </Grid>

      
      <Grid container rowSpacing={5} columnSpacing={5} paddingBottom={5}paddingLeft={5}>
      <Grid item spacing={20}>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Button
                  size="small"
                  onClick={() => setFeature("Temperature")}
                  color={feature === "Temperature" ? "primary" : "secondary"}
                  variant={feature === "Temperature" ? "outlined" : "text"}
                >
                  Temperature
                </Button>
                <Button
                  size="small"
                  onClick={() => setFeature("Windspeed")}
                  color={feature === "Windspeed" ? "primary" : "secondary"}
                  variant={feature === "Windspeed" ? "outlined" : "text"}
                >
                  Wind Speed
                </Button>
                <Button
                  size="small"
                  onClick={() => setFeature("CloudCover")}
                  color={feature === "CloudCover" ? "primary" : "secondary"}
                  variant={feature === "CloudCover" ? "outlined" : "text"}
                >
                  Cloud Cover
                </Button>
                <Button
                  size="small"
                  onClick={() => setFeature("Pressure")}
                  color={feature === "Pressure" ? "primary" : "secondary"}
                  variant={feature === "Pressure" ? "outlined" : "text"}
                >
                Sea Level Pressure
                </Button>
              </Stack>
            </Grid>
            </Grid>
            <Grid container rowSpacing={1.5} columnSpacing={5}paddingLeft={5} paddingRight={2}>

        <Grid
          item
          md={8}
          sx={{ display: { sm: "none", md: "block", lg: "none" } }}
        />

        {/* row 2 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Average {feature}</Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={0}>
                <Button
                  size="small"
                  onClick={() => setSlot("month")}
                  color={slot === "month" ? "primary" : "secondary"}
                  variant={slot === "month" ? "outlined" : "text"}
                >
                  Month
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot("year")}
                  color={slot === "year" ? "primary" : "secondary"}
                  variant={slot === "year" ? "outlined" : "text"}
                >
                  Year
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            {console.log(feature)}
            <GraphSelect feature={feature} slot={slot}/>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item paddingLeft={2}>
              <Typography variant="h5">Daily Stats</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2, ml: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
            <Statistics feature={feature} />

            </Box>
            {/* <MonthlyBarChart /> */}
          </MainCard>
        </Grid>

        {/* row 3 */}

        {/* row 4 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                Seasonal Change in Temperature{" "}
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="standard-select-currency"
                size="small"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { py: 0.5, fontSize: "0.875rem" },
                }}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 1.75 }}>
            <Stack spacing={1.5} sx={{ mb: -12 }}>
              
            </Stack>
            <TimevsTemperature />
          </MainCard>
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Overview</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
              <ListItemButton divider>
                <ListItemText primary="Total Number of Aircrafts:" />
                <Typography variant="h6" color="textSecondary">
                    2000
                </Typography>
              </ListItemButton>
              <ListItemButton divider>
              <ListItemText primary="How many can safely take off today?" />
                <Typography variant="h6" color="textSecondary">
                    1540
                </Typography>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary="Resulted aircraft emdangerments for past month:" />
                <Typography variant="h6" color="textSecondary">
                    34
                </Typography>
              </ListItemButton>

            </List>
          </MainCard>
        </Grid>
       
      </Grid>
      <Copyright />
    </>
  );
}

function GraphSelect({ feature,slot} ) {
    console.log("Temp")

    switch (feature) {
      case "Temperature":
        console.log("Temp99")

        if(slot=="month"){
            return <MonthlyTemp />;

        }else{
            return <YearlyTemp />;
        }

        case "Windspeed":

            if(slot=="month"){
                return <MonthlyAvgWindSpeed />;
    
            }else{
                return <YearlyWind />;
            }

        case "CloudCover":
            if(slot=="month"){
                return <MonthlyCloud />;
    
            }else{
                return <YearlyCloud />;
            }

            case "Pressure":
                if(slot=="month"){
                    return <MonthlyPressure/>;
        
                }else{
                    return <YearlyPressure />;
                }
        default:
            return null;


        
    //   case 2:
    //     return <Chats />;
    //   case 3:
    //     return <Rooms />;
    //   default:
    //     return null;
    }
  }

  function Statistics ({feature}){

    switch (feature) {
        case "Temperature":
          console.log("Temp23")
          return <Stack spacing={2} paddingBottom={4}>
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

        case "Windspeed":
            return <Stack spacing={2} paddingBottom={4}>
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
          case "CloudCover":

            return <Stack spacing={2} paddingBottom={4}>
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
  
    
    
  
          case "Pressure":
            return <Stack spacing={2} paddingBottom={4}>
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

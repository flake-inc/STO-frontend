import React from "react";
import { useState, useEffect } from "react";
import Copyright from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CenteredTabs from "./CenteredTabs";
import axios from "axios";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import OrdersTable from "./OrdersTable";
import IncomeAreaChart from "./IncomeAreaChart";
import MonthlyBarChart from "./MonthlyBarChart";
import ReportAreaChart from "./ReportAreaChart";
import SalesColumnChart from "./SalesColumnChart";
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



import AnalyticEcommerce from "../Cards/Statistics/AnalyticEcommerce";

import MainCard from "../MainCard";

import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Container } from "@mui/system";
// import avatar1 from 'assets/images/users/avatar-1.png';
// import avatar2 from 'assets/images/users/avatar-2.png';
// import avatar3 from 'assets/images/users/avatar-3.png';
// import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

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
      <Grid container justify="space-around" rowSpacing={5.5} columnSpacing={40} paddingBottom={5}>
        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25, mt: 4 }} rowSpacing={6.5 }>
          <Typography variant="h5">Today Overview:</Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2} >
          {/* <AnalyticEcommerce title="Temperature" count="2.56ºC" percentage={59.3} extra="35,000" /> */}
          <TempGauge />
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2}>
          {/* <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" /> */}
          <WindGauge />
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <CloudCover />

          {/* <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" /> */}
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={2} spacing={2}>
          <PressureGauge />

          {/* <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" /> */}
        </Grid>
      </Grid>

      
      <Grid container rowSpacing={5} columnSpacing={5} paddingBottom={5}>
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
            <Grid container rowSpacing={1.5} columnSpacing={5}>

        
        {/* <Grid item xs={6} sm={3} md={2} lg={2}>
                <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={6} sm={3} md={2} lg={2}>
                <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid> */}

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
            {/* <Box sx={{ pt: 1, pr: 2 }}>
                        <IncomeAreaChart slot={slot} />
                    </Box> */}
            {/* <MonthlyTemp/> */}
            {console.log(feature)}
            <GraphSelect feature={feature} slot={slot}/>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Overview</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2, ml: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}>
                <Typography variant="h6" color="textSecondary">
                  Today's Statistics
                </Typography>
                <AnalyticEcommerce
                  title="Maximum Temperature"
                  count="34.2ºC"
                  percentage={10.3}
                  isLoss="true"
                  extra="1.5°C"
                  state="Temperature"
                  event="increases"
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
              <Typography variant="h5">Analytics Report</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
              <ListItemButton divider>
                <ListItemText primary="Company Finance Growth" />
                <Typography variant="h5">+45.14%</Typography>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary="Company Expenses Ratio" />
                <Typography variant="h5">0.58%</Typography>
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Business Risk Cases" />
                <Typography variant="h5">Low</Typography>
              </ListItemButton>
            </List>
            {/* <ReportAreaChart /> */}
          </MainCard>
        </Grid>
        {/* <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Transaction History</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List
                        component="nav"
                        sx={{
                            px: 0,
                            py: 0,
                            '& .MuiListItemButton-root': {
                                py: 1.5,
                                '& .MuiAvatar-root': avatarSX,
                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                            }
                        }}
                    >
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <GiftOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $1,430
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        78%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MessageOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'error.main',
                                        bgcolor: 'error.lighter'
                                    }}
                                >
                                    <SettingOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $682
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        16%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                    </List>
                </MainCard>
                <MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Help and Support Chat
                                    </Typography>
                                    <Typography variant="caption" color="secondary" noWrap>
                                        Typical replay within 5 min
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            Need Help?
                        </Button>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            {articles.dewpoint_temperature}
                        </Button>
                    </Stack>
                </MainCard>
            </Grid> */}
      </Grid>
      {/* </Container> */}
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


        
    //   case 2:
    //     return <Chats />;
    //   case 3:
    //     return <Rooms />;
    //   default:
    //     return null;
    }
  }

  function Statistics ({menu}){

    switch (feature) {
        case "Temperature":
          console.log("Temp99")
          return
          <Grid container alignItems="center" justifyContent="space-between">

          <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Overview</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2, ml: 2 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}>
                <Typography variant="h6" color="textSecondary">
                  Today's Statistics
                </Typography>
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
            </Box>
            {/* <MonthlyBarChart /> */}
          </MainCard>
        </Grid>
        </Grid>;
;
  
          case "Windspeed":
  
            return
  
            <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Overview</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2, ml: 2 }} content={false}>
              <Box sx={{ p: 3, pb: 0 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" color="textSecondary">
                    Today's Statistics
                  </Typography>
                  <AnalyticEcommerce
                    title="Maximum Windspeed" 
                    count="5kmph"
                    percentage={10.3}
                    isLoss="true"
                    extra="1.5kmph"
                    state="Wind speed"
                    event="decreases"
                  />
                  <AnalyticEcommerce
                    title="Minimum Windspeed" 
                    count="1kmph"
                    percentage={7.3}
                    extra="0.5kmph"
                    state="Windspeed"
                    event="increases"
                  />
  
                  {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
                              <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
                </Stack>
              </Box>
              {/* <MonthlyBarChart /> */}
            </MainCard>
          </Grid>;
    
  
        //   case "CloudCover":
        //       if(slot=="month"){
        //           return <MonthlyCloud />;
      
        //       }else{
        //           return <YearlyCloud />;
        //       }
  
        //       case "Pressure":
        //           if(slot=="month"){
        //               return <MonthlyPressure/>;
          
        //           }else{
        //               return <YearlyPressure />;
        //           }
  
  



  }



  }



export default function Dashboard() {
  return <DashboardContent />;
}

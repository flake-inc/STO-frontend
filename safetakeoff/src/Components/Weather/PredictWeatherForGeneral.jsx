import React from "react";
import { useState, useEffect } from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import vid from "../../Assets/large_aviation.mp4";
import Paper from "@mui/material/Paper";
import MainCard from "../MainCard";
import Cards from "../Dashboard/cards";

import {
  Box,
  Grid,
  Stack,
  CardHeader,
  Avatar,
  Card,
  Typography,
} from "@mui/material";

import TempSeries from "./Tempseries";
import { useLocation } from "react-router-dom";
import Cloudseries from "./Cloudseries";
import Pressureseries from "./Pressureseries";
import Windseries from "./Windseries";
import BasicTable from "../AirCraft/Table";
import DangeredTable from "./Table";


export default function WeatherPredictGeneral() {
  const { state } = useLocation();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = state.date.toLocaleString('de-DE', options)

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
              Prediction for {date}
            </Typography>
            <Grid
              container
              rowSpacing={1.5}
              columnSpacing={5}
              paddingLeft={5}
              paddingRight={2}
              paddingBottom={5}
            >
              <MainCard content={false} sx={{ mt: 1.5 }}>
                <Cards />
              </MainCard>

              <Grid
                item

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
                      Mean Sea Level Prediction
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

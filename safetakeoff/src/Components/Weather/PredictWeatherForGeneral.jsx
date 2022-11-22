import React from "react";
import { useState, useEffect } from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import vid from "../../Assets/large_aviation.mp4";
import Paper from "@mui/material/Paper";

import {
  Box,
  Grid,
  Stack,
  CardHeader,
  Avatar,
  Card,
  Typography,
} from "@mui/material";

import TempSeries from "./Timeseries";

export default function WeatherPredictGeneral() {

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
          class="active"
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
              Predicted Day's Overview
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
                  <Card>
                    <h3>Temperature:</h3>
                    <h1>&deg;24</h1>
                  </Card>
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <Card>
                    <h3>WindSpeed:</h3>
                    <h1>&deg;24</h1>
                  </Card>
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <Card>
                    <h3>Cloud Cover:</h3>
                    <h1>&deg;24</h1>
                  </Card>
                </Grid>

                <Grid item sx={{ mx: "auto" }}>
                  <Card>
                    <h3>Pressure:</h3>
                    <h1>&deg;24</h1>
                  </Card>
                </Grid>
              </Stack>

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

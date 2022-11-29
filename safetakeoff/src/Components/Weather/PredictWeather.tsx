import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React, { useState } from "react";
import dayjs from "dayjs";
import StickyFooter from "../Public/Copyright/Copyright";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import axios from "axios";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "react-select";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import vid from "../../Assets/large_aviation.mp4";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default function PredictWeather() {
  const [value, setValue] = React.useState(dayjs("2022-01-01"));
  const [isDisabled, setIsDisabled] = useState(true);
  const [Options, setOptions] = useState([]);

  let navigate = useNavigate();

  const getInitialState = () => {
    const options = "R44 RAVEN I";
    return options;
  };

  const [option, setOption] = useState(getInitialState);

  const handleTypeChange = (e) => {
    setOption(e.target.option);
  };

  const handleClick = () => {
    if (isDisabled) {
      navigate("/result-all", {
        state: { date: value.add(1, 'day')},
      });
    } else {
      navigate("/result-flight", {
        state: { option: option, date: value.add(1, 'day') },
      });
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/aircraftscategories", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        setOptions(res.Categories);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, []);

  return (
    <>
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
      <Container
        sx={{
          py: 5,
        }}
      >
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              pt: 3,
              pb: 3,
            }}
          >
            <Paper
              sx={{
                maxWidth: 936,
                margin: "auto",
                overflow: "hidden",
                opacity: 0.9,
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                marginTop={3}
              >
                Predict Weather
              </Typography>
              <Typography
                align="center"
                color="text.secondary"
                style={{
                  display: "inline-block",
                  fontSize: 14,
                }}
                paragraph
              >
                Please input the date that you want to predict. Use the button
                next to it if you want to get a comparison of the predicted
                weather and the selected aircraft type.
              </Typography>
              <Container>
                <Autocomplete
                  disablePortal
                  defaultValue={Options[0]}
                  id="selectbox"
                  options={Options}
                  disabled={isDisabled}
                  onChange={handleTypeChange}
                  renderInput={(params) => (
                    <TextField {...params} label="options" />
                  )}
                />

                <div
                  style={{
                    display: "inline-block",
                    fontSize: 14,
                    fontStyle: "italic",
                    marginTop: "1em",
                  }}
                >
                  <Checkbox
                    checked={isDisabled}
                    onChange={() => setIsDisabled((state) => !state)}
                  >
                    Remove Aircraft Type
                  </Checkbox>
                </div>
              </Container>

              <Stack
                sx={{ pt: 2 }}
                direction="row"
                spacing={4}
                justifyContent="center"
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Stack>
            </Paper>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              sx={{ width: 300, margin: "auto", overflow: "hidden" }}
              onClick={() => handleClick(value)}
              style={{
                display: "inline-block",
                fontSize: 24,
                fontStyle: "bold",
                backgroundColor: "#0a0a23",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                transition: "0.25w",
              }}
            >
              Predict
            </Button>
          </Box>
        </main>
      </Container>

      <StickyFooter />
    </>
  );
}

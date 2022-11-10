import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React, { useState } from "react";
import dayjs from "dayjs";
import StickyFooter from "../Public/Copyright/Copyright";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
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

const isWeekend = (date) => {
  const day = date.day();
  return day === 0 || day === 6;
};

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const Options = [
  { value: "R44 RAVEN I", label: "R44 RAVEN I" },
  { value: "CARBON CUB FX3", label: "CARBON CUB FX3" },
  { value: "M20C", label: "M20C" },
  { value: "CC11-160 CARBON CUB SS", label: "CC11-160 CARBON CUB SS" },
  { value: "SR20-G3", label: "SR20-G3" },
  { value: "SR22-G5 TURBO", label: "SR22-G5 TURBO" },
  { value: "G36 BONANZA", label: "G36 BONANZA" },
  { value: "VIPERJET MK II", label: "VIPERJET MK II" },
];

export default function PredictWeather() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  let navigate = useNavigate();

  const getInitialState = () => {
    const options = "R44 RAVEN I";
    return options;
  };

  const [options, setOption] = useState(getInitialState);

  const handleTypeChange = (e) => {
    setOption(e.target.options);
  };

  const handleClick = () => {
    if (isDisabled) {
      navigate("/result-all")
    } else {
      navigate("/result-flight")
    }
  };

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
          class="active"
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <ResponsiveAppBar />
      <Container
        sx={{
          py: 5,
          // background: "black",
          // opacity: 0.6,
          // color: "white",
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
            <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden", opacity: 0.9 }}>
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
                <Select
                  onChange={handleTypeChange}
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={Options[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="aircraftcategory"
                  options={Options}
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
                    shouldDisableDate={isWeekend}
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

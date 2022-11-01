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
  { value: "Mig-17", label: "Mig-17" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function PredictWeather() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <div
        className="visual"
        style={{
          // backgroundColor: bgGif ?? "#41B3A3",
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
          <source
            src="https://spire.com/wp-content/themes/spire2021/video/grey/large_aviation.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <ResponsiveAppBar />
      <Container>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
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
              <>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={Options[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={Options}
                />

                <div
                  style={{
                    color: "hsl(0, 0%, 0%)",
                    display: "inline-block",
                    fontSize: 18,
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
              </>

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
            </Container>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ width: 200, padding: 1, margin: 2 }}
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

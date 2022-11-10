import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const defaultValues = {
  model: "",
  make: "",
  Year: "",
  category: "",
  reg: "",
  temperature_threshold: 0,
  wind_speed_threshold: 0,
  relative_humidity_threshold: 0,
  solar_radiation_threshold: 0,
  thermal_radiation_threshold: 0,
};

const categories = [
  {
    value: "1",
    label: "Gliders | Sailplanes",
  },
  {
    value: "2",
    label: "Gyrocopter",
  },
  {
    value: "3",
    label: "Military/Classic/Vintage",
  },
  {
    value: "4",
    label: "Multi Engine Piston",
  },
  {
    value: "5",
    label: "Piston Helicopters",
  },
  {
    value: "6",
    label: "Private Jets",
  },
  {
    value: "7",
    label: "Single Engine Piston",
  },
  {
    value: "8",
    label: "Single Piston",
  },
  {
    value: "9",
    label: "Turbine Helicopters",
  },
  {
    value: "10",
    label: "Turboprops",
  },
  {
    value: "11",
    label: "Twin Piston",
  },
  {
    value: "12",
    label: "Ultralight",
  },
];

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid item>
          <TextField
            fullWidth
            required
            id="model-input"
            name="model"
            label="Model"
            type="text"
            value={formValues.model}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            required
            id="make-input"
            name="make"
            label="Make"
            type="text"
            value={formValues.make}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            required
            id="year-input"
            name="year"
            label="Year"
            type="number"
            value={formValues.Year}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            required
            id="reg-input"
            name="reg"
            label="Registration ID"
            type="text"
            value={formValues.reg}
            onChange={handleInputChange}
          />
        </Grid>
        <br></br>

        <Grid container justify="center">
          <FormControl>
            <TextField
              select
              id="category"
              label="Category: "
              value={formValues.os}
              helperText="Please select the aircraft category"
              onChange={handleInputChange}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <hr />

        <Grid item alignItems="center" justify="center">
          <div>
            Temperature Threshold
            <Slider
              label
              value={formValues.temperature_threshold}
              onChange={handleSliderChange("temperature_threshold")}
              defaultValue={1}
              step={0.01}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <hr />
        <Grid item>
          <div>
            Wind Speed Threshold
            <Slider
              value={formValues.wind_speed_threshold}
              onChange={handleSliderChange("wind_speed_threshold")}
              defaultValue={1}
              step={0.01}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <hr />
        <Grid item>
          <div>
            Relative Humidity Threshold
            <Slider
              value={formValues.relative_humidity_threshold}
              onChange={handleSliderChange("relative_humidity_threshold")}
              defaultValue={1}
              step={0.01}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <hr />
        <Grid item>
          <div>
            Solar Radiation Threshold
            <Slider
              value={formValues.solar_radiation_threshold}
              onChange={handleSliderChange("solar_radiation_threshold")}
              defaultValue={1}
              step={0.01}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <hr />
        <Grid item>
          <div>
            Thermal Radiation Threshold
            <Slider
              value={formValues.thermal_radiation_threshold}
              onChange={handleSliderChange("thermal_radiation_threshold")}
              defaultValue={1}
              step={0.01}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <hr />

        <Button
          variant="contained"
          color="primary"
          type="submit"
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
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;

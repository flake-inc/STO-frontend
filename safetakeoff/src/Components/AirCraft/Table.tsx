import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";
import JsonData from "./Data/AirCrafts.json";

var columns = [
  "Model",
  "Make",
  "Year",
  "Category",
  "REG",
  "Total Seats",
  "Temperature Threshold",
  "Wind Speed Threshold",
  "Relative Humidity Threshold",
  "Solar Radiation Threshold",
  "Thermal Radiation Threshold",
  "Total Cloud Cover Threshold",
];

const data = JsonData;

const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

export default function BasicTable() {
  return (
    <Paper>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            sx={{ mr: 1 }}
            //   onClick={handleOpen}
            style={{
              display: "inline-block",
              fontSize: 14,
              fontStyle: "bold",
              backgroundColor: "#0a0a23",
              color: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
              transition: "0.25w",
              margin: "10px",
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>

      <MUIDataTable
        title={"Aircrafts list"}
        data={data}
        columns={columns}
        options={options}
      />
    </Paper>
  );
}

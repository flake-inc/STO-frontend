import React from "react";
import Paper from "@material-ui/core/Paper";
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
    <>
      <MUIDataTable
        title={"Aircrafts list"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
}

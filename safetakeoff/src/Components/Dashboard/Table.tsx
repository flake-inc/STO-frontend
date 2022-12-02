import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import axios from "axios";

var columns = [
  "Category", 
  "Make","Model", 
  "Pressure", 
  "REG", 
  "Temperature Threshold", 
  "Total Cloud Cover Threshold",
  "Total Seats",
  "Wind Speed Threshold",
  "Year"];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

var dataarray = [];

export default function DangeredTable() {
  const [Model, set_model] = useState([]);
  const [Make, set_make] = useState([]);
  const [Category, set_category] = useState([]);
  const [Year, set_year] = useState([]);
  const [REG, set_reg] = useState([]);
  const [data, set_data] = useState([{}]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/check_today_danger", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        console.log("response data", res)
        for (const [key, value] of Object.entries(res)) {
          let str_val = JSON.stringify(value)
          var array = [];
          for(var i in value)
            array.push(value[i]);

          console.log("++++++++++++++++++++",array);
          console.log(key, value);
          dataarray.push(array);
        }
      }).then(() => {

      }

      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [dataarray]);
  console.log("data array",dataarray)

  return (
    <>
      <MUIDataTable
        // title={"Aircrafts list"}
        data={dataarray}
        columns={columns}
        options={options}
      />
    </>
  );
}

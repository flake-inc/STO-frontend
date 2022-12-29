import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import MUIDataTable from "mui-datatables";
import axios from "axios";

var columns = [
  "Category",
  "Make",
  "Model",
  "Pressure",
  "REG",
  "Temperature Threshold",
  "Total Cloud Cover Threshold",
  "Total Seats",
  "Wind Speed Threshold",
  "Year",
];


const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}


export default function DangeredTable() {
  var [dataarray, setDataArray] = useState([]);
  const date1 = useSelector((state) => state.date.date);
  const date2 = date1.slice(0, 16);
  const date3 = formatDate(new Date(date2.slice(5, 16)));

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/check_day_danger", {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          date: date3,
        },
      })
      .then((response) => {
        const res = response.data;
        const array = [];
        for (const [key, value] of Object.entries(res)) {
          
          array.push(value);
        }
        setDataArray(array);
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
      <MUIDataTable
        title={"Aircrafts list"}
        data={dataarray}
        columns={columns}
        options={options}
      />
    </>
  );
}

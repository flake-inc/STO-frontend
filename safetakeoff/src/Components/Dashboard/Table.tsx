import React, { useState, useEffect } from "react";
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



export default function DangeredTable() {
  var [dataarray,setDataArray] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/check_today_danger", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        console.log("response is", res)
        const array = [];
        for (const [key, value] of Object.entries(res)) {
          // let str_val = JSON.stringify(value);
          
          // for (var i in value) array.push(value[i]);
          array.push(value)
          // setDataArray([...value])
          

        }
        setDataArray(array)
        
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
        title={"Dangered Aircrafts in this hour!"}
        data={dataarray}
        columns={columns}
        options={options}
      />
    </>
  );
}

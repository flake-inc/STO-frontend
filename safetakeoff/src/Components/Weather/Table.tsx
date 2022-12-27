import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import axios from "axios";

var columns = ["Model", "Make", "Category", "Year", "REG"];

const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

export default function DangeredTable() {
  const [Model, set_model] = useState([]);
  const [Make, set_make] = useState([]);
  const [Category, set_category] = useState([]);
  const [Year, set_year] = useState([]);
  const [REG, set_reg] = useState([]);
  const [data, set_data] = useState([[]]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/check_today_danger", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        set_model(res.Model);
        set_make(res.Make);
        set_category(res.Category);
        set_year(res.Year);
        set_reg(res.REG);
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
        data={(Model, Make, Category, Year, REG)}
        columns={columns}
        options={options}
      />
    </>
  );
}

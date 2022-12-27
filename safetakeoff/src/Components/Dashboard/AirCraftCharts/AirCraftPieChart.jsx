import React from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AirCraftPieChart() {
  const [categories, set_category] = useState({ datasets: [] });
  const [categoriesCount, set_categoryCount] = useState({ datasets: [] });
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/aircraftspie", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const res = response.data;
        set_category(res.Categories);
        set_categoryCount(res.CategoryCount);
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
      <Plot
        style={{ width: "500px" }}
        data={[
          {
            values: categoriesCount,
            labels: categories,
            name: "Categories",
            hoverinfo: "label+percent+name",
            type: "pie",
            textinfo: "none",
          },
        ]}
        layout={{
          title: "Aircraft Categories",
          showlegend: true,
        }}
      />
    </>
  );
}

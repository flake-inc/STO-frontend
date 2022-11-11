import React from "react";
import Plot from "react-plotly.js";

export default function AirCraftPieChart() {
  return (
    <Plot
      data={[
        {
          values: [16, 15, 12, 6, 5, 4, 42],
          labels: [
            "US",
            "China",
            "European Union",
            "Russian Federation",
            "Brazil",
            "India",
            "Rest of World",
          ],
          domain: { column: 0 },
          name: "GHG Emissions",
          hoverinfo: "label+percent+name",
          hole: 0.4,
          type: "pie",
        },
      ]}
      layout={{ width: 500, height: 500, title: "A Fancy Plot" }}
    />
  );
}

import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import AirCraftList from "./AirCraftList";
import StickyFooter from "../Public/Copyright/Copyright";
import React from "react";
import Box from "@mui/material/Box";

export default function ViewAllAirCrafts() {
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
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
        <Box
          component="main"
          sx={{ flex: 1, py: 6, px: 4}}
        >
          <h1> This is Viewing AirCraft Page!</h1>
          <br />
          <AirCraftList />
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
}

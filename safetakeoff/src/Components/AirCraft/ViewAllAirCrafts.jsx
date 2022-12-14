import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import AirCraftList from "./AirCraftList";
import StickyFooter from "../Public/Copyright/Copyright";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import vid from "../../Assets/large_aviation.mp4";
import StaffAppbar from "../Dashboard/staffappbar";

export default function ViewAllAirCrafts() {
  const usertype = sessionStorage.getItem("usertype");
  function Userselect(usertype) {
    if (usertype.usertype == "admin") {
      return <ResponsiveAppBar />;
    } else {
      return <StaffAppbar />;
    }
  }
  
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
          className="active"
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <Userselect usertype={usertype} />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4 }}>
          <br />
          <AirCraftList />
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
}

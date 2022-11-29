import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import Box from "@mui/material/Box";
import vid from '../../Assets/large_aviation.mp4'


export default function FlightPredict() {
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
          <source
            src={vid}
            type="video/mp4"
          />
        </video>
      </div>
      <ResponsiveAppBar />

      <StickyFooter />
    </>
  );
}

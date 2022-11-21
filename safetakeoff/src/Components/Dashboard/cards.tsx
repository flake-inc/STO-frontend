import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "./style.scss";
import TempGauge from "./dailytempgauge";
import WeatherCard from "./WeatherCard";
import { padding } from "@mui/system";
import { Typography } from "@mui/material";

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const movies = [
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
  "/logo192.png",
];

export default function Cards() {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        color="text.secondary"
        paddingTop={5}
        gutterBottom
      >
        Weather Conditions for last 24 Hours
      </Typography>
      <div className="container" {...bind()}>
        {movies.map((src) => (
          <WeatherCard />
        ))}
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<Cards />, rootElement);

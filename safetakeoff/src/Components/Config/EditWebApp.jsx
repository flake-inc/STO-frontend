import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import Box from "@mui/material/Box";
import vid from "../../Assets/large_aviation.mp4";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";


export default function EditWebApp() {
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
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <ResponsiveAppBar />

      <Container
        sx={{
          py: 5,
        }}
      >
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              pt: 3,
              pb: 3,
            }}
          >
            <Paper
              sx={{
                maxWidth: 936,
                margin: "auto",
                overflow: "hidden",
                opacity: 0.9,
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                marginTop={3}
              >
                Configurations
              </Typography>
              <Typography
                align="center"
                color="text.secondary"
                style={{
                  display: "inline-block",
                  fontSize: 14,
                }}
                paragraph
              >
                Config page...
              </Typography>
              <Container>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: 14,
                    fontStyle: "italic",
                    marginTop: "1em",
                  }}
                >
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ width: 300, margin: "auto", overflow: "hidden" }}
                      onClick={() => handleClick(value)}
                      style={{
                        display: "inline-block",
                        fontSize: 24,
                        fontStyle: "bold",
                        backgroundColor: "#0a0a23",
                        color: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                        transition: "0.25w",
                      }}
                    >
                      Predict
                    </Button>
                  </Box>
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ width: 300, margin: "auto", overflow: "hidden" }}
                      onClick={() => handleClick(value)}
                      style={{
                        display: "inline-block",
                        fontSize: 24,
                        fontStyle: "bold",
                        backgroundColor: "#0a0a23",
                        color: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                        transition: "0.25w",
                      }}
                    >
                      Predict
                    </Button>
                  </Box>
                </div>
              </Container>
            </Paper>
          </Box>
        </main>
      </Container>

      <StickyFooter />
    </>
  );
}

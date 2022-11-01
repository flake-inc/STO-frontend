import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";



export default function StickyFooter() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        color: "white",
        height: "$footer-height",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        background: "black",
        opacity: 0.6,
      }}
    >
      <CssBaseline />
      <Box component="footer">
        <Container maxWidth="sm">
          <Typography variant="body1">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          <Typography variant="body2">
          <Link color="inherit" href="#">Privacy Policy</Link>  
          <Link color="inherit" href="#">Visit Us</Link>
 
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

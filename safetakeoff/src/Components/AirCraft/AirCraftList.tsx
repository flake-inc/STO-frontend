import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Form from "./form";
import BasicTable from "./Table";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import * as d3 from "d3";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AirCraftList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Paper
        sx={{
          maxWidth: 2000,
          margin: "auto",
          overflow: "hidden",
          opacity: 0.9,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              sx={{ mr: 1 }}
                onClick={handleOpen}
              style={{
                display: "inline-block",
                fontSize: 14,
                fontStyle: "bold",
                backgroundColor: "#0a0a23",
                color: "#fff",
                borderRadius: "10px",
                transition: "0.25w",
                margin: "10px",
              }}
            >
              Add New
            </Button>
          </Grid>
        </Grid>

        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          marginTop={3}
        >
          Aircrafts
        </Typography>

        <div>
          <BasicTable />
        </div>
      </Paper>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New AirCraft
            </Typography>
            <Form />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Form from "./form";
import BasicTable from "./Table";

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

// d3.csv("/AirCrafts.csv", function DATA(dataset) {
//   const x = dataset;
// });


export default function AirCraftList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // let x = "";

  useEffect(() => {
    d3.csv("/AirCrafts.csv").then(function(dataset) {
      console.log(dataset)
    });
  }, []);

  return (
    <>
      <Paper
        sx={{ maxWidth: 936, margin: "auto", overflow: "hidden", opacity: 0.9 }}
      >
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

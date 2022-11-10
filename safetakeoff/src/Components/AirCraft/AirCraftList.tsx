import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Form from "./form";

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
        

        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: "block" }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by Aircraft ID"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "default" },
                  }}
                  variant="standard"
                />
              </Grid>
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
                    boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                    transition: "0.25w",
                  }}
                >
                  Add New
                </Button>

                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon color="inherit" sx={{ display: "block" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          No aircrafts imported for this application yet
        </Typography>
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

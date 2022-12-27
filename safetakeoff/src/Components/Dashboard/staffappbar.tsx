import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const pages = ["Check Weather", "Flights"];

export default function StaffAppbar() {
  const [user, setUser] = useState();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usertyoe");
    document.location = "/login";
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  let navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (menuItem) => {
    routeChange(menuItem);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleLogout =()=>{
  //   axios.get('http://127.0.0.1:5000/logout',{
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },

  // })
  //   .then((response) => {

  //     navigate('/login')

  //   })
  //   .catch((error) => {
  //     if (error.response) {

  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  //   });
  // }

  const routeChange = (e) => {
    if (e == "Check Weather") {
      let path = `/weather`;
      navigate(path);
    } else if (e == "Flights") {
      let path = `/aircrafts`;
      navigate(path);
    } else if (e == "Configurations") {
      let path = `/config`;
      navigate(path);
    } else if (e == "Safe-TakeOff") {
      let path = `/`;
      navigate(path);
    }
  };

  useEffect(() => {
    if (anchorElNav != null) {
    }
  }, [anchorElNav]);

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#0a0a23",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <FlightTakeoffIcon />
          </Avatar>
          <MenuItem
            onClick={() => handleCloseNavMenu("Safe-TakeOff")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
              fontWeight: 1000,
              fontSize: 26,
            }}
          >
            Safe-TakeOff
          </MenuItem>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <MenuItem onClick={() => handleCloseNavMenu("Safe-TakeOff")}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Safe-TakeOff
            </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            Logout
            <IconButton
              className="material-icons"
              onClick={handleLogout}
              style={{
                color: "white",
              }}
            >
              logout
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

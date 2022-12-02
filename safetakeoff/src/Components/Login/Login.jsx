import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StickyFooter from "../Public/Copyright/Copyright";
import { Paper } from "@mui/material";
import Image from "../../Assets/login.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme(
);

const styles = {
  paperContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Image})`
  }
};


export default function Login() {
   const navigate = useNavigate();

   const [usererror,setusererror] = useState(false)
   const [usererrormsge,setusererrormsge] =useState(null)


   const [passerror,setpasserror] = useState(false)
   const [passerrormsge,setpasserrormsge] =useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    axios.post('http://127.0.0.1:5000/login',{
      headers: {
          'Content-Type': 'application/json',
      },
      email: data.get('email'),
      password: data.get("password"),

  })
    .then((response) => {
      sessionStorage.setItem("token", response.data.access_token);
      sessionStorage.setItem("usertype", response.data.usertype);

      console.log(response.data.usertype)

      // history.push('/');

      // document.location.reload();
      // const res = response.data;
      navigate("/")
     
      
    })
    .catch((error) => {
      if (error.response) {

        if (error.response.data.error=='User error'){
          setusererror(true)
          setusererrormsge('User does not exist' );
          setpasserror(false)


        }
        else if(error.response.data.error=='Password error'){
          setpasserror(true)
          setpasserrormsge('Invalid password' );
          setusererror(false)

        }
       

        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });

 

  };

  

  return (
    <Paper style={styles.paperContainer}>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{marginTop: 8, bgcolor: "secondary.main" }}>
            <FlightTakeoffIcon />
          </Avatar>

          <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                marginTop={3}
              >
                Safe-TakeOff
              </Typography>

          <Typography component="p" variant="p">
            Powered by flake inc.
          </Typography>
          <br />
          <Box
            component="form"
            onSubmit={handleSubmit}
            Validate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              error ={usererror}
              id="email"
              label="Email Address"
              name="email"
              helperText ={usererrormsge}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={passerror}
              helperText={passerrormsge}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <StickyFooter />
    </Paper>
  );
}

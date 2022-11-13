import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface food {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
//   Model: string;
//   Make: string;
//   Year: number;
//   Category: string;
//   REG: string;
//   Total_Seats: number;
//   Temperature_Treshold: number;
//   Wind_Speed_Threshold: number;
//   Relative_Humidity_Threshold: number;
//   Solar_Radiation_Threshold: number;
//   Thermal_Radiation_Threshold: number;
//   Total_Cloud_Cover_Threshold: number;
}

// var columns = [
//   "Model",
//   "Make",
//   "Year",
//   "Category",
//   "REG",
//   "Total Seats",
//   "Temperature Threshold",
//   "Wind Speed Threshold",
//   "Relative Humidity Threshold",
//   "Solar Radiation Threshold", 
//   "Thermal Radiation Threshold",
//   "Total Cloud Cover Threshold"
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows: food[] = [
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },

];

export default function BasicTable() {
  const [rows, setRows] = useState<food[]>(originalRows);
  const [searched, setSearched] = useState<string>("");
  const classes = useStyles();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <SearchBar
                  value={searched}
                  onChange={(searchVal) => requestSearch(searchVal)}
                  placeholder="Search by Aircraft ID"
                  onCancelSearch={() => cancelSearch()}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ mr: 1 }}
                //   onClick={handleOpen}
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
        <TableContainer>
        
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell align="right">Make</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">REG</TableCell>
                <TableCell align="right">Temperature Threshold</TableCell>
                <TableCell align="right">Wind Speed Threshold</TableCell>
                <TableCell align="right">Relative Humidity Threshold</TableCell>
                <TableCell align="right">Solar Radiation Threshold</TableCell>
                <TableCell align="right">Thermal Radiation Threshold</TableCell>
                <TableCell align="right">Total Cloud Cover Threshold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (

                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

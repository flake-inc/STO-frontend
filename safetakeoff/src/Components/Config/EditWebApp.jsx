import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React, { useEffect, useState, useRef } from "react";
import StickyFooter from "../Public/Copyright/Copyright";
import Box from "@mui/material/Box";
import vid from "../../Assets/large_aviation.mp4";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as XLSX from "xlsx";
import DataTable from "react-data-table-component";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Stack, TextField, FormControlLabel } from "@mui/material";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// toast.configure()

export default function EditWebApp() {
  const [usererror, setusererror] = useState(false);
  const [usererrormsge, setusererrormsge] = useState(null);

  const [passerror, setpasserror] = useState(false);
  const [passerrormsge, setpasserrormsge] = useState(null);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [feature, setfeature] = useState("dataset");
  const [email, setemail] = useState(null);
  const token = sessionStorage.getItem("token");
  const usertype = sessionStorage.getItem("usertype");


  function handleModel (){

    axios
      .post("http://127.0.0.1:5000/prediction", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.error);
          toast.error(error.response.data.message)

         
        }
      });
    
  }

  useEffect(() => {
    if ((token == null) | (usertype == "staff")) {
      navigate("/login");
    }
  }, []);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelected] = useState(null);
  const navigate = useNavigate();

  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
  };

  function ElementSelect(c) {
    if (c.c == "dataset") {
      return (
        <Container>
          <div>
            <Typography
              component="h5"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
              marginTop={8}
            >
              Add New Dataset
            </Typography>
            <Typography
              component="p"
              variant="p"
              align="center"
              color="text.secondary"
              gutterBottom
              fontSize={12}
            >
              Choose a dataset from your device.
            </Typography>
            <div
              align="center"
              style={{
                textAlign: "center",
                margin: "auto",
              }}
            >
              <input
                type="file"
                required="true"
                accept=".csv,.xlsx,.xls"
                data-testid = 'dataset'
                onChange={handleFileUpload}
                style={{
                  fontSize: 12,
                  fontStyle: "bold",
                  backgroundColor: "#0a0a23",
                  color: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div align="center">
              <Button
                className="buttons3"
                type="submit"
                size="lg"
                style={{
                  fontSize: 12,
                  fontStyle: "bold",
                  backgroundColor: "#0a0a23",
                  color: "#fff",
                  borderRadius: "10px",
                  transition: "0.25w",
                }}
                sx={{ mt: 3, mb: 2 }}
                onClick={OnSubmit}
              >
                Upload{" "}
              </Button>
            </div>

            <DataTable
              pagination
              highlightOnHover
              columns={columns}
              data={data}
            />
          </div>
        </Container>
      );
    } else if (c.c == "staff") {
      return (
        <Container>
          <div>
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
              marginTop={3}
            >
              Add new staff
            </Typography>
            <Box
              component="form"
              onSubmit={HandleStaffSubmit}
              validate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                data-testid = 'email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{"data-testid" :'email1',
              }}              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                inputProps={{'data-testid':'password'}}

                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  fontSize: 14,
                  fontStyle: "bold",
                  backgroundColor: "#0a0a23",
                  color: "#fff",
                  borderRadius: "10px",
                  transition: "0.25w",
                }}
              >
                Add{" "}
              </Button>
            </Box>
          </div>
        </Container>
      );
    }
  }

  // handle file upload
  const handleFileUpload = (e) => {
    setFile(e.target.files);
    setSelected(e.target.files[0]);
    setFileName(e.target.files[0].name);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  const OnSubmit = (event) => {
    let formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("filename", fileName);

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    var x = "";

    if (fileName != null) {
      axios
        .post("http://127.0.0.1:5000/upload", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const res = response.data;
          toast.success("File successfully uploaded");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);

            if (token == null) {
              toast.error("Authentication Error: Session Expired");
              sessionStorage.removeItem("token");
            } else {
              toast.error("Incorrect file name");
            }
          }
        });
    } else {
      toast.error("No file selected");
    }

    event.preventDefault();
  };

  const HandleStaffSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("email", data.get("email"));
    formData.append("password", data.get("password"));

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    axios
      .post("http://127.0.0.1:5000/addstaff", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.error);

          if (error.response.data.error == "User already exists") {
            setusererror(true);
            setusererrormsge("User already exists");
            setpasserror(false);
            toast.error("User already exists");
          } else if (token == null) {
            toast.error("Authentication Error: Session Expired");
            sessionStorage.removeItem("token");
          }
        }
      });
  };

  return (
    <>
      <div
        className="visual"
        style={{
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
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <ResponsiveAppBar />

      <ToastContainer autoClose={5000} hideProgressBar={true} />

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
                component="p"
                variant="p"
                align="center"
                color="text.secondary"
                gutterBottom
                marginBottom={5}
              >
                You can add a new dataset for the prediction using the add
                dataset buttom below. If you want to add new staff member,
                select the add staff button below.
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Button
                  size="small"
                  onClick={() => setfeature("dataset")}
                  style={{
                    fontSize: 16,
                    fontStyle: "bold",
                    backgroundColor: "#0a0a23",
                    color: "#fff",
                    borderRadius: "10px",
                    transition: "0.25w",
                  }}
                >
                  Add dataset
                </Button>
                <Button
                  size="small"
                  onClick={() => setfeature("staff")}
                  style={{
                    fontSize: 16,
                    fontStyle: "bold",
                    backgroundColor: "#0a0a23",
                    color: "#fff",
                    borderRadius: "10px",
                    transition: "0.25w",
                  }}
                >
                  Add staff
                </Button>

                <Button
                  size="small"
                  
                  style={{
                    fontSize: 16,
                    fontStyle: "bold",
                    backgroundColor: "#0a0a23",
                    color: "#fff",
                    borderRadius: "10px",
                    transition: "0.25w",
                  }}
                  onClick ={handleModel}
                >
                  Update Model{" "}
                </Button>
              </Stack>

              <ElementSelect c={feature} />
            </Paper>
          </Box>
        </main>
      </Container>

      <StickyFooter />
    </>
  );
}

import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React, { useEffect, useState } from "react";
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

export default function EditWebApp() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelected] = useState(null);

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

  // handle file upload
  const handleFileUpload = (e) => {
    setFile(e.target.files);
    setSelected(e.target.files[0]);
    setFileName(e.target.files[0].name);

    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file);
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

  console.log(file);
  console.log(fileName);
  console.log(selectedFile);

  const OnSubmit = (event) => {
    const data1 = { file: selectedFile, fileName: fileName };
    console.log(selectedFile);
    var x = "";
    console.log(data1);
    console.log(data1);

    axios
      .post("http://127.0.0.1:5000/upload", {
        headers: {
          "Content-Type": "application/json",
        },
        myfile: selectedFile,
        fileName: fileName,
      })
      .then((response) => {
        const res = response.data;
        // console.log(response.data.Message)
        // navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    event.preventDefault();
  };

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
          className="active"
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

              <Container>
                <div>
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                  />
                  <Button
                    className="buttons3"
                    type="submit"
                    size="lg"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={OnSubmit}
                  >
                    Upload{" "}
                  </Button>
                  <DataTable
                    pagination
                    highlightOnHover
                    columns={columns}
                    data={data}
                  />
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

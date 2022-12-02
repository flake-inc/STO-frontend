import ResponsiveAppBar from "../Dashboard/ResponsiveAppBar";
import React, { useEffect, useState,useRef } from "react";
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
import { toast,ToastContainer } from 'react-toastify';
import {
  Stack,
  TextField,
   FormControlLabel


} from "@mui/material";

import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";

// toast.configure()




export default function EditWebApp() {

  const [usererror,setusererror] = useState(false)
  const [usererrormsge,setusererrormsge] =useState(null)


  const [passerror,setpasserror] = useState(false)
  const [passerrormsge,setpasserrormsge] =useState(null)
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [feature, setfeature] = useState('dataset');
  const [email, setemail] = useState(null);
  const token = sessionStorage.getItem("token");
  const usertype = sessionStorage.getItem("usertype");

  useEffect(() => {  

    if (token == null | usertype =='staff'){

      navigate('/login')
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

  function ElementSelect (c) {

    console.log(c.c)

    if (c.c == 'dataset'){

      return(
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
      Add new dataset
    </Typography>
        <input
          type="file"
          required = "true"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileUpload}
        />
        <Button
          className="buttons3"
          type="submit"
          size="lg"
          color = 'secondary'
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
    </Container>);

       } else if (c.c== 'staff'){ 

       return(<Container>
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
            Validate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
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
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
Add            </Button>
            
          </Box>

       
      </div>
    </Container>);


      

    }


    }
  

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
    let formData = new FormData();
    // console.log(selectedFile)
    formData.append("file", selectedFile);
    formData.append("filename",fileName)


    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    var x = "";
    // console.log(data1);
    // console.log(data1);

   

    if(fileName!=null)
    {axios
      .post("http://127.0.0.1:5000/upload",formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
     
      })
      .then((response) => {
        const res = response.data;
        console.log(res)
        toast.success("File successfully uploaded");
        // window. location. reload(false);
                // toast.current.show({ severity: 'success', summary: 'File uploaded successfully', life: 5000 });        // console.log(response.data.Message)// navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.headers);

          if(token==null){
            toast.error("Authentication Error: Session Expired");
            sessionStorage.removeItem("token");
            // navigate('/login')


        }else{
            toast.error("Incorrect file name");
        }


        }
      });}
      else{
        toast.error("No file selected");
      }


    event.preventDefault();
  };


const HandleStaffSubmit =(e)=>{

  e.preventDefault();
  const data = new FormData(e.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
  console.log(token);
  const formData = new FormData();
  formData.append('email',data.get("email"))
  formData.append('password',data.get("password"))


  for (var key of data.entries()) {
    console.log(key[0] + ', ' + key[1]);
}
   

  axios.post('http://127.0.0.1:5000/addstaff',{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    email: data.get('email'),
    password: data.get("password")
  
})
  .then((response) => {

    console.log(response);
    toast.success(response.data.message);
  
    
  })
  .catch((error) => {
    if (error.response) {

      console.log(error.response.data.error);

      if (error.response.data.error=='User already exists'){
        setusererror(true)
        setusererrormsge('User already exists' );
        setpasserror(false)
        toast.error("User already exists");



      }

      else if(token==null){
        toast.error("Authentication Error: Session Expired");
        sessionStorage.removeItem("token");
        // navigate('/login')


    }
      
      
    }
  });


  
}
  
  console.log(email)

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

      <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
/>

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

              <Stack direction="row" alignItems="center" paddingLeft= {10} spacing={1}>
                      <Button
                        size="small"
                        onClick={() => setfeature("dataset")}
                        // color={slot === "month" ? "primary" : "secondary"}
                        // variant={slot === "month" ? "outlined" : "text"}
                        style={{
                          fontSize: 14,
                          fontStyle: "bold",
                          backgroundColor: "#0a0a23",
                          color: "#fff",
                          borderRadius: "10px",
                          boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                          transition: "0.25w",
                        }}
                      >
                        Add dataset
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setfeature("staff")}
                        // color={slot === "year" ? "primary" : "secondary"}
                        // variant={slot === "year" ? "outlined" : "text"}
                        style={{
                          fontSize: 14,
                          fontStyle: "bold",
                          backgroundColor: "#0a0a23",
                          color: "#fff",
                          borderRadius: "10px",
                          boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                          transition: "0.25w",
                        }}
                      >
                        Add staff
                      </Button>
                    </Stack>

            <ElementSelect c= {feature} />
            </Paper>
          </Box>
        </main>
      </Container>

      <StickyFooter />
    </>

    
  );

 
}

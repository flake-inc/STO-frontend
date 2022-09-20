import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
// import EditAccountDetails from "./components/Edit Account Details/EditAccountDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />  
       </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
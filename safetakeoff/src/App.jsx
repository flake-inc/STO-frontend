import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PredictWeather from "./Components/Weather/PredictWeather"
import ViewAllAirCrafts from "./Components/AirCraft/ViewAllAirCrafts"
import EditWebApp from "./Components/Config/EditWebApp";
import WeatherPredictGeneral from "./Components/Weather/PredictWeatherForGeneral";
import FlightPredict from "./Components/Weather/PredictWeatherForAirCraft";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />  
          <Route path="/weather" element={<PredictWeather />} />  
          <Route path="/aircrafts" element={<ViewAllAirCrafts />} />  
          <Route path="/config" element={<EditWebApp />} />  
          <Route path="/" element={<Dashboard />} />  
          <Route path="/result-all" element={<WeatherPredictGeneral/>} />
          <Route path="/result-flight" element={<FlightPredict/>} />

       </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
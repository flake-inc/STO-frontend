import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/LoginComponent";
import Main from "./components/Main/MainComponent";
import Home from "./components/Home/HomeComponent";
// import EditAccountDetails from "./components/Edit Account Details/EditAccountDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="main" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />}></Route>
            {/* <Route
              path="editaccountdetails"
              element={<EditAccountDetails />}
            ></Route> */}
          </Route>
       </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Holdings from "./components/Holdings/Holdings";
import Positions from "./components/Positions/Positions";
import Bids from "./components/Bids/Bids";
import Funds from "./components/Funds/Funds";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};


export default App;




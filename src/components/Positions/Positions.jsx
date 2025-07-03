import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideTable from "../SideTable/SideTable";
import { CiSearch } from "react-icons/ci";
import './Positions.css'
import { useNavigate } from "react-router-dom";



const Positions = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/dashboard')
  }

  return (
    <div className="position-container">
      <SideTable />
      <div className="position-section">
      <p>You don't have any positions yet</p>
      <button onClick={handleGetStarted}>Get Started</button>
      <div className='analysis'>Analysis</div>
    </div>
    </div>
  );
};

export default Positions;


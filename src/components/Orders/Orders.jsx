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
import "./Orders.css";

const Orders = () => {
  return (
    <div className="orders-container">
      <SideTable />
      <div className="order-section">
        <div className="page-header-container">
          <div className="holdings-container">
            <div className="exicuted-orders">Exicuted Orders (1) </div>
          </div>
          <div className="search-links-container">
            <div className="search-bar">
              <div className="search-icons-container">
                <CiSearch className="search-icons" />
              </div>
              <input
                type="text"
                className="search-input-element"
                placeholder="Search"
              />
            </div>

            <ul className="list-container">
              <li>Contract me</li>
              <li>View history</li>
              <li>Download</li>
            </ul>
          </div>
        </div>

        <TableContainer component={Paper} style={{ background: "transparent" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ color: "#d7dfe9" }}>
                  Time
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Type
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Instrument
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Product
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Qtl.
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Avg. price
                </TableCell>
                <TableCell align="right" style={{ color: "#d7dfe9" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" style={{ color: "#fff" }}>
                  12:24:27
                </TableCell>
                <TableCell align="right" style={{ color: "#fff" }}>
                  BUY
                </TableCell>
                <TableCell align="right" style={{ color: "#fff" }}>
                  MAXHEALTH <spa>nse</spa>
                </TableCell>
                <TableCell align="right" style={{ color: "#fff" }}>
                  CNC
                </TableCell>
                <TableCell align="right" style={{ color: "#fff" }}>
                  0/1
                </TableCell>
                <TableCell align="right" style={{ color: "#fff" }}>
                  1275.10
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "rgb(199, 132, 132)" }}
                >
                  CANCELED AMD
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;

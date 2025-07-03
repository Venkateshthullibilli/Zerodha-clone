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
import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-container">
      <SideTable />
      <div className="funds-table-container">
        <div className="buttons-container">
          <p className="instant-transfer">
            Instant, Zero-cost fund transfers with UPI
          </p>
          <button className="fund-btn">Add funds</button>
          <button className="withdraw-btn">Withdraw</button>
        </div>
        <div className="main-container">
          <div className="equity-comodity-container">
            <div className="equity-header-container">
              <div className="equity-text">Equity</div>
              <div className="view-container">
                <p className="statement-text">View Statement</p>
                <p className="statement-text">Help</p>
              </div>
            </div>
            <div className="equity-container">
              <div className="margin-main-container">
                <div className="margin-container">
                  <p className="margin-text">Available margin</p>
                  <p
                    className="values"
                    style={{ color: "rgb(109, 114, 208)", fontWeight: "bold" }}
                  >
                    450.40
                  </p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Used margin</p>
                  <p className="values">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Available</p>
                  <p className="values">450.40</p>
                </div>
              </div>

              <div className="margin-main-container">
                <div className="margin-container">
                  <p className="margin-text">Available margin</p>
                  <p className="value">450.40</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Open balance</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Payout</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Span</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Delivery margin</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Exposer</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Options premium</p>
                  <p className="value">0.00</p>
                </div>
              </div>

              <div className="margin-final-container">
                <div className="margin-container">
                  <p className="margin-text">Collateral(Liquid funds)</p>
                  <p className="value">450.40</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Collateral(Equity)</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Total Collateral</p>
                  <p className="value">0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="equity-comodity-container">
            <div className="equity-header-container">
              <div className="equity-text">Commodity</div>
              <div className="view-container">
                <p className="statement-text">View Statement</p>
                <p className="statement-text">Help</p>
              </div>
            </div>
            <div className="equity-container">
              <div className="margin-main-container">
                <div className="margin-container">
                  <p className="margin-text">Available margin</p>
                  <p className="values">00.0</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Used margin</p>
                  <p className="values">00.0</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Available</p>
                  <p className="values">00.0</p>
                </div>
              </div>

              <div className="margin-final-container">
                <div className="margin-container">
                  <p className="margin-text">Available margin</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Open balance</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Payout</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Span</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Delivery margin</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Exposer</p>
                  <p className="value">0.00</p>
                </div>
                <div className="margin-container">
                  <p className="margin-text">Options premium</p>
                  <p className="value">0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;

import React, { useState } from "react";
import SideTable from "../SideTable/SideTable";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import "./Holdings.css";

const stockList = [
  {
    id: 1,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 2,
    instrument: "ADANIGREEN",
    quantity: 21,
    AvgCost: "3,197.4",
    ltp: "1,648.15",
    invested: "55,956.56",
    CurrentVal: "52,967.90",
    proLoss: "8,012.45",
    netcharge: "+18.45%",
    dayChg: "+11.12%",
  },
  {
    id: 3,
    instrument: "ADANIPORTS",
    quantity: 8,
    AvgCost: "8,142.78",
    ltp: "4,152.10",
    invested: "74,956.75",
    CurrentVal: "12,967.00",
    proLoss: "8,010.47",
    netcharge: "+25.12%",
    dayChg: "+2.41%",
  },
  {
    id: 4,
    instrument: "ADANIPOWER",
    quantity: 14,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "8,010.00",
    netcharge: "+18.45%",
    dayChg: "+4.10%",
  },
  {
    id: 5,
    instrument: "AURIONPRO",
    quantity: 1,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 6,
    instrument: "BAJAJELEC",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 7,
    instrument: "BFUTILITIE",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 8,
    instrument: "CRISIL",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 9,
    instrument: "DRREDDY",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 10,
    instrument: "GPIL",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 11,
    instrument: "GREENPOWER",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 12,
    instrument: "HAPPSTMNDS",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 13,
    instrument: "HAVELLS",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 14,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 15,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 16,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 17,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
];

const Holdings = () => {
  const [searchInput, setUserInput] = useState("");
  const [initialStockList, setInitialStockList] = useState(stockList);
  const onChangeSearchInput = (event) => {
    setUserInput(event.target.value);
  };

  const searchResults = initialStockList.filter((eachItem) =>
    eachItem.instrument.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="home-container">
      <SideTable stockList={stockList} />
      <div className="holdings-table-container">
        <div className="header-container">
          <div className="holdings-container">
            <h4>Holdings</h4>
            <select>
              <option>All Quantity</option>
              <option>Profit</option>
            </select>
          </div>
          <div className="search-links-container">
            <div className="search-bar">
              <div className="search-icons-container">
                <CiSearch className="search-icons" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={onChangeSearchInput}
                className="search-input-element"
                placeholder="Search"
              />
            </div>

            <ul className="list-container">
              <li>Family</li>
              <li>Analytics</li>
              <li>Downloads</li>
            </ul>
          </div>
        </div>

        <div className="total-money">
          <div className="money-container">
            <p>Total Investments</p>
            <p className="total-money"> 3,85490</p>
          </div>
          <div className="money-container">
            <p>Current Value</p>
            <p className="total-money">2,46651</p>
          </div>
          <div className="money-container">
            <p>Day's P&L</p>
            <p className="total-money">3,85490</p>
          </div>
          <div className="money-container">
            <p className="total-money">Total P&L</p>
            <p>3,85490</p>
          </div>
        </div>

        <table className="table-container">
          <thead>
            <tr className="table-row">
              <th>Instrument</th>
              <th>Quantity</th>
              <th>Avg.cost</th>
              <th>LTP</th>
              <th>Invested</th>
              <th>Cur.val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((data) => (
              <tr>
                <td>{data.instrument}</td>
                <td>{data.quantity}</td>
                <td>{data.AvgCost}</td>
                <td>{data.ltp}</td>
                <td>{data.invested}</td>
                <td>{data.CurrentVal}</td>
                <td>{data.proLoss}</td>
                <td>{data.netcharge}</td>
                <td>{data.dayChg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;

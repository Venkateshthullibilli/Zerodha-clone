import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import DataTable from "../DataTable/DataTable";

import "./SideTable.css";


const SideTable = () => {
  return (
    <div className="sidebar-container">
      <div className="searchbar">
        <div className="search-icon-container">
          <CiSearch className="search-icon" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search eg: infy bse, nifty fut, index fund"
        />
        <IoFilterOutline className="search-icon" />
      </div>
      <div className="watchlist-container">
        <p className="watchlist-text">Watchlist 1</p>
        <p className="newgroup-text">+ New group</p>
      </div>
      <div>
      <DataTable/>
      </div>
    </div>
  );
}

export default SideTable;

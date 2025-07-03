import React from "react";
import "./DataTable.css";

const DataTable = () => {
  const stocks = [
    {
      id: 1,
      name: "REDINGTON",
      quntity: null,
      value: 26.2,
      percentage: 8.82,
      totalValue: 323.1,
    },
    {
      id: 2,
      name: "CRSIL",
      quntity: 3,
      value: 102.5,
      percentage: 1.72,
      totalValue: 6049.5,
    },
    {
      id: 3,
      name: "MUTHOOTFIN",
      quntity: 30,
      value: -3.5,
      percentage: -0.14,
      totalValue: 2579.7,
    },
    {
      id: 4,
      name: "KIMS",
      quntity: 15,
      value: -12.7,
      percentage: -1.88,
      totalValue: 664.05,
    },
    {
      id: 5,
      name: "APPOLOHOSP",
      quntity: null,
      value: 208.5,
      percentage: 2.94,
      totalValue: 7310.0,
    },
    {
      id: 6,
      name: "UNIHEALTH-SM",
      quntity: null,
      value: -1.1,
      percentage: 0.65,
      totalValue: 168.3,
    },
    {
      id: 7,
      name: "MAXHEALTH",
      quntity: 1,
      value: 8.6,
      percentage: 0.68,
      totalValue: 1275.1,
    },
  ];

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Default (7)</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.quntity}</td>
            <td>{data.value}</td>
            <td>{data.percentage}</td>
            <td>{data.totalValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DataTable;

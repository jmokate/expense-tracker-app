import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddedExpense from "./AddedExpense";

function ListOfAddedExpenses() {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{/* <AddedExpense /> */}</tbody>
    </table>
  );
}

export default ListOfAddedExpenses;

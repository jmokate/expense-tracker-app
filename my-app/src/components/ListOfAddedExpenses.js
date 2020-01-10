import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddedExpense from "./AddedExpense";

function ListOfAddedExpenses() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </tbody>
    </table>
  );
}

export default ListOfAddedExpenses;

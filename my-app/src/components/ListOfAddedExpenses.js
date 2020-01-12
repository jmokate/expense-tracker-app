import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddedExpense from "./AddedExpense";

function ListOfAddedExpenses(props) {
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
      <tbody>
        <tr>
          <td>{props.expenses.entireExpenseObject}</td>
          <td>{props.expense}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListOfAddedExpenses;

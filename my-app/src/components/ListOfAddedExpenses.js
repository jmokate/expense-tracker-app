import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddedExpense from "./AddedExpense";

function ListOfAddedExpenses(props) {
  // const completedExpense = props.expenseArray(item =>
  //     <tr>
  //       <td>{props.expensesArray.type}</td>
  //     </tr>
  // );
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
          <td>{props.completedExpense}</td>
          <td>Name</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListOfAddedExpenses;

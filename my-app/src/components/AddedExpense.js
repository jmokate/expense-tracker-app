import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddedExpense(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.expense.type}</td>
          <td>{props.expense.name}</td>
          <td>{props.expense.date}</td>
          <td>$ {props.expense.amount}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default AddedExpense;

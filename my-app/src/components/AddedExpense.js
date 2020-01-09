import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddedExpense(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th onChange={() => props.handleChange(props.expense.type)}>
            {props.expense.type}
          </th>
          <th onChange={() => props.handleChange(props.expense.name)}>
            {props.expense.name}
          </th>
          <th>{props.expense.date}</th>
          <th>{props.expense.amount}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default AddedExpense;

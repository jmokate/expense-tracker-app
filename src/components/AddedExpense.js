import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function AddedExpense(props) {
  return (
    <Table>
      <tbody>
        <tr>
          <td sm='3'>{props.expense.type}</td>
          <td sm='3'>{props.expense.name}</td>
          <td sm='3'>{props.expense.date}</td>
          <td sm='3'>$ {props.expense.amount}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddedExpense;

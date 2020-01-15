import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
// import AddedExpense from "./AddedExpense";

function ListOfAddedExpenses(props) {
  const completedExpense = props.expensesArray.map(item => {
    return (
      <tr>
        <td>{item.entireExpenseObject.type}</td>
        <td>{item.entireExpenseObject.name}</td>
        <td>{item.entireExpenseObject.date}</td>
        <td>$ {item.entireExpenseObject.amount}</td>
        <td>
          <Button
            variant='danger'
            onClick={() => props.deleteExpense(item.entireExpenseObject.id)}
          >
            &#9747;
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive striped bordered className='table'>
      <thead>
        <tr>
          <th sm='3'>Type</th>
          <th sm='3'>Name</th>
          <th sm='3'>Date</th>
          <th sm='3'>Amount</th>
        </tr>
      </thead>
      <tbody>{completedExpense}</tbody>
    </Table>
  );
}

export default ListOfAddedExpenses;

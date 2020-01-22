import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";

function ExpensesTable(props) {
  const completedExpense = props.expensesArray.map(expense => {
    return (
      <tr>
        <td>{expense.type}</td>
        <td>{expense.name}</td>
        <td>{expense.date}</td>
        <td>$ {expense.amount}</td>
        <td>
          <Button
            variant='danger'
            onClick={() => props.deleteExpense(expense.id)}
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

export default ExpensesTable;

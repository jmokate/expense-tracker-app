import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Expense(props) {
  return (
    <Container>
      <form onSubmit={props.handleSubmit}>
        <Row>
          <Col>
            <span>Type: </span>
          </Col>
          <Col>
            <select
              name={props.expense.type}
              value={props.expense.type}
              onChange={props.handleChange}
            >
              <option value=''>Please Select</option>
              <option value='card'>Card</option>
              <option value='cash'>Cash</option>
              <option value='Check'>Check</option>
              <option value='Crypto'>Crypto</option>
              <option value='other'>Other</option>
            </select>
          </Col>
          <Col>
            <span>Name: </span>
          </Col>
          <Col>
            <input
              type='text'
              name={props.expense.name}
              placeholder='What did you buy?'
              onChange={props.handleChange}
              value={props.expense.name}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Date: </span>
          </Col>
          <Col>
            <input
              type='date'
              name='date'
              onChange={props.handleChange}
              value={props.expense.date}
            />
          </Col>
          <Col>
            <span>Amount: </span>
          </Col>
          <Col>
            <input
              type='number'
              name='amount'
              placeholder='$ ?'
              onChange={props.handleChange}
              value={props.expense.amount}
            />
          </Col>
        </Row>
        <Col>
          <button>Add Expense</button>
        </Col>
      </form>
    </Container>
  );
}

export default Expense;

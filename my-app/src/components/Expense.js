import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Expense(props) {
  return (
    <Container>
      <form onSubmit={props.handleSubmit}>
        <Row>
          <Col sm='3'>
            <span>Type: </span>
          </Col>
          <Col sm='3'>
            <select
              name='type'
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
          <Col sm='3'>
            <span>Name: </span>
          </Col>
          <Col sm='3'>
            <input
              type='text'
              name='name'
              placeholder='What did you buy?'
              onChange={props.handleChange}
              value={props.expense.name}
            />
          </Col>
        </Row>
        <Row>
          <Col sm='3'>
            <span>Date: </span>
          </Col>
          <Col sm='3'>
            <input
              type='date'
              name='date'
              onChange={props.handleChange}
              value={props.expense.date}
            />
          </Col>
          <Col sm='3'>
            <span>Amount: </span>
          </Col>
          <Col sm='3'>
            <input
              type='number'
              name='amount'
              placeholder='How much did it cost?'
              onChange={props.handleChange}
              value={props.expense.amount}
            />
          </Col>
        </Row>{" "}
        <br />
        <Row>
          <Col className='text-right'>
            <Button type='submit' variant='success'>
              Add Expense
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default Expense;

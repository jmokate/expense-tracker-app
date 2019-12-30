import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <form action=''>
        <Row>
          <Col>
            <span>Type: </span>
          </Col>
          <Col>
            <select name='type' id=''>
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
              name='item-name'
              placeholder='What did you buy?'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Date: </span>
          </Col>
          <Col>
            <input type='date' name='date' />
          </Col>
          <Col>
            <span>Amount: </span>
          </Col>
          <Col>
            <input type='number' name='amount' />
          </Col>
        </Row>
      </form>
      <Container>
        <Col>
          <button>Add Expense</button>
        </Col>
      </Container>
    </Container>
  );
}

export default Main;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Table() {
  return (
    <Container>
      <table>
        <Row>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </Row>
      </table>
    </Container>
  );
}

export default Table;

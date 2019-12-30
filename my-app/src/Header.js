import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <h1>Expense Tracker</h1>
      <h2>Add New Item</h2>
    </Container>
  );
}

export default Header;

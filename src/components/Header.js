import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container className='text-center'>
      <h1>Expense Tracker</h1> <br />
      <h2>Add New Item</h2> <br />
    </Container>
  );
}

export default Header;

import React from "react";

function Main() {
  return (
    <form action=''>
      <span>Type: </span>
      <select name='type' id=''>
        <option value='card'>Card</option>
        <option value='cash'>Cash</option>
        <option value='Check'>Check</option>
        <option value='Crypto'>Crypto</option>
        <option value='other'>Other</option>
      </select>
      <span>Name: </span>
      <input type='text' name='item-name' placeholder='What did you buy?' />
      <span>Date: </span>
      <input type='date' name='date' />
      <span>Amount: </span>
      <input type='number' name='amount' />
    </form>
  );
}

export default Main;

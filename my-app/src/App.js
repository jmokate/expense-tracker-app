import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Expense from "./components/Expense";
import Table from "./components/Table";
import AddedExpense from "./components/AddedExpense";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        type: "",
        name: "",
        date: "",
        amount: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("changed");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("submitted");
  }

  render() {
    return (
      <div>
        <Header />
        <Expense
          expense={this.state.expense}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Table />
        <AddedExpense
          expense={this.state.expense}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

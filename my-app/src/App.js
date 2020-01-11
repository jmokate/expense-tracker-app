import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Expense from "./components/Expense";
import ListOfAddedExpenses from "./components/ListOfAddedExpenses";
import AddedExpense from "./components/AddedExpense";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      expense: {
        type: "",
        name: "",
        date: "",
        amount: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.addExpenseToList = this.addToExpenseArray.bind(this);
  }

  handleChange(event) {
    //console.log("changed");
    const { name, value } = event.target;
    const expense = { ...this.state.expense };
    expense[name] = value;
    //console.log(name);
    //console.log(value);
    this.setState({
      expense
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const entireExpenseObject = { ...this.state.expense };
    entireExpenseObject.id = Date.now();
    //get updated version of state
    // entireExpenseObject.push(this.state.expenses);
    // this.setState({ expenses: entireExpenseObject });
    console.log(entireExpenseObject);
    // console.log(this.state.expenses);
    this.setState({
      expenses: [...this.state.expenses, { entireExpenseObject }]
    });
    console.log(this.state.expenses);
    // this.addToExpenseArray(entireExpenseObject);
  }

  // addToExpenseArray(event) {
  //   console.log("expense added");
  //   //get expense array here
  //   const addedExpenses = [...this.state.expenses, event];
  //   //pull newest expense
  //   //const newestExpense = addedExpenses.length - 1;
  //   //add it to the list
  //   this.setState({
  //     addedExpenses
  //   });
  //   //console.log(addedExpenses);
  //   console.log(addedExpenses);
  // }

  render() {
    return (
      <div>
        <Header />
        <Expense
          expense={this.state.expense}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ListOfAddedExpenses />
        <AddedExpense
          expense={this.state.expense}
          addExpense={this.addToExpenseArray}
          //handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

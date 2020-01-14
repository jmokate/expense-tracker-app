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
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  componentDidMount() {
    console.log("mount!");
    const storage = JSON.parse(localStorage.getItem("expense")) || [];
    this.setState({ expenses: storage });
  }

  componentDidUpdate() {
    localStorage.setItem("expense", JSON.stringify(this.state.expenses));
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

    //const expensesArray = { ...this.state.expenses };
    entireExpenseObject.id = Date.now();
    if (
      entireExpenseObject.type === "" ||
      entireExpenseObject.name === "" ||
      entireExpenseObject.date === "" ||
      entireExpenseObject.amount === ""
    ) {
      alert("missing something?");
    } else {
      //get updated version of state
      //expensesArray.push(entireExpenseObject);
      // this.setState({ expenses: entireExpenseObject });
      console.log(entireExpenseObject);
      // console.log(this.state.expenses);
      this.setState({
        expenses: [...this.state.expenses, { entireExpenseObject }]
      });

      this.setState({
        expense: {
          type: "",
          name: "",
          date: "",
          amount: ""
        }
      });
    }

    console.log(this.state.expenses);
    // this.addToExpenseArray(entireExpenseObject);
  }

  deleteExpense(event) {
    console.log(event);
    const listedExpenses = [...this.state.expenses];
    // get the current array of expenses
    // filter out the expense's id matches the one trying to delete
    const savedExpenses = listedExpenses.filter(item => {
      if (item.entireExpenseObject.id !== event) {
        return listedExpenses;
      }
    });
    this.setState({ expenses: savedExpenses });
    //update the state of new expenses
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

        {/* <AddedExpense expense={this.state.expense} /> */}

        <ListOfAddedExpenses
          expensesArray={this.state.expenses}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;

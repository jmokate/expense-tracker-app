import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Expense from "./components/Expense";
import ListOfAddedExpenses from "./components/ListOfAddedExpenses";

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
    const storage = JSON.parse(localStorage.getItem("expense")) || [];
    this.setState({ expenses: storage });
  }

  componentDidUpdate() {
    localStorage.setItem("expense", JSON.stringify(this.state.expenses));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const expense = { ...this.state.expense };
    expense[name] = value;

    this.setState({
      expense
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const entireExpenseObject = { ...this.state.expense };

    entireExpenseObject.id = Date.now();
    if (
      entireExpenseObject.type === "" ||
      entireExpenseObject.name === "" ||
      entireExpenseObject.date === "" ||
      entireExpenseObject.amount === ""
    ) {
      alert("missing something?");
    } else {
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
  }

  deleteExpense(event) {
    const listedExpenses = [...this.state.expenses];

    const savedExpenses = listedExpenses.filter(item => {
      if (item.entireExpenseObject.id !== event) {
        return listedExpenses;
      }
    });
    this.setState({ expenses: savedExpenses });
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

        <ListOfAddedExpenses
          expensesArray={this.state.expenses}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;

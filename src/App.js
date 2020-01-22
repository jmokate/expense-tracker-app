import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";

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
    const savedExpenses = JSON.parse(localStorage.getItem("expense")) || [];
    this.setState({ expenses: savedExpenses });
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

    const expense = { ...this.state.expense, id: Date.now() };

    if (!expense.type || !expense.name || !expense.date || !expense.amount) {
      return alert("missing something?");
    }
    this.setState({
      expenses: [...this.state.expenses, expense]
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

  deleteExpense(event) {
    const savedExpenses = this.state.expenses.filter(expense => {
      return expense.id !== event;
    });
    this.setState({ expenses: savedExpenses });
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm
          expense={this.state.expense}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ExpensesTable
          expensesArray={this.state.expenses}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;

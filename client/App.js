import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";
import expenses from "./expenses";

class App extends React.PureComponent {
  state = {
    expenses: [],
    isFormDisplayed: false
  };
  
  componentDidMount() {
    this.setState({ expenses });
  }

  handleDelete = (evt) => {
    var { id } = evt.currentTarget.closest("tr").dataset;

    this.setState({
      expenses: this.state.expenses.filter(expense => expense.id != Number(id))
    });
  };

  handleCreate = (expense) => {
    this.setState({
      expenses: [...this.state.expenses, expense]
    });
  };

  handleToggleForm = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header handleToggleForm={this.handleToggleForm} />

        <div className="wrapper">
          {this.state.isFormDisplayed && <Form handleToggleForm={this.handleToggleForm} handleCreate={this.handleCreate} />}
          <Table expenses={this.state.expenses} handleDelete={this.handleDelete} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
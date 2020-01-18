import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import expenses from "./expenses";

class App extends React.PureComponent {
  state = {
    expenses: []
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

  render() {
    return (
      <React.Fragment>
        <Header />
        <Table expenses={this.state.expenses} handleDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default App;
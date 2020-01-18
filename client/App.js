import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import ExpensesForm from "./components/ExpensesForm";
import expenses from "./expenses";

class App extends React.PureComponent {
  state = {
    expenses: []
  };
  
  componentDidMount() {
    this.setState({ expenses });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <ExpensesForm /> */}
        <Table expenses={this.state.expenses} />
      </React.Fragment>
    );
  }
}

export default App;
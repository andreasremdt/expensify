import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";
import ExpenseContext from "./contexts/ExpenseContext";

class App extends React.PureComponent {
  state = {
    isFormDisplayed: false
  };

  static contextType = ExpenseContext;

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
          {this.state.isFormDisplayed && (
            <Form
              onSubmit={this.context.handleCreate}
              onCancel={this.handleToggleForm}
            />
          )}
          <Table />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

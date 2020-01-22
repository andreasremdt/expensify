import React from "react";
import expenses from "../expenses";

var ExpenseContext = React.createContext();

class ExpenseContextWrapper extends React.PureComponent {
  state = { expenses: [] };

  componentDidMount() {
    this.setState({ expenses });
  }

  handleDelete = evt => {
    var { id } = evt.currentTarget.closest("tr").dataset;

    this.setState({
      expenses: this.state.expenses.filter(expense => expense.id != Number(id))
    });
  };

  handleCreate = expense => {
    this.setState({
      expenses: [...this.state.expenses, expense]
    });
  };

  handleUpdate = updated => {
    this.setState({
      expenses: this.state.expenses.map(expense => {
        if (expense.id == updated.id) {
          return updated;
        }

        return expense;
      })
    });
  };

  render() {
    return (
      <ExpenseContext.Provider
        value={{
          expenses: this.state.expenses,
          handleDelete: this.handleDelete,
          handleCreate: this.handleCreate,
          handleUpdate: this.handleUpdate
        }}
      >
        {this.props.children}
      </ExpenseContext.Provider>
    );
  }
}

export default ExpenseContext;
export { ExpenseContextWrapper };

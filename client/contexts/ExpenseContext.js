import React from "react";
import expenseService from "../services/expense-service";

var ExpenseContext = React.createContext();

class ExpenseContextWrapper extends React.PureComponent {
  state = { expenses: [] };

  componentDidMount() {
    expenseService.getAll().then(expenses => {
      this.setState({ expenses });
    });
  }

  handleDelete = evt => {
    var { id } = evt.currentTarget.closest("tr").dataset;

    expenseService.remove(id).then(() => {
      this.setState({
        expenses: this.state.expenses.filter(expense => expense._id != id)
      });
    });
  };

  handleCreate = expense => {
    expenseService.create(expense).then(result => {
      this.setState({
        expenses: [...this.state.expenses, result]
      });
    });
  };

  handleUpdate = updated => {
    expenseService.update(updated).then(() => {
      this.setState({
        expenses: this.state.expenses.map(expense => {
          if (expense._id == updated._id) {
            return updated;
          }

          return expense;
        })
      });
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

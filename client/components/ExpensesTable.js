import React from "react";

class ExpensesTable extends React.PureComponent {
  state = {
    expenses: []
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.expenses.map(expense => (
            <tr key={expense.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default ExpensesTable;
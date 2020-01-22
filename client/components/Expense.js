import React from "react";
import Icon from "./Icon";
import Form from "./Form";
import { formatDate, formatCurrency } from "../utils/format-helpers";

class Expense extends React.PureComponent {
  state = { isEditing: false };

  handleClick = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = expense => {
    this.handleClick();

    this.props.handleUpdate(expense);
  };

  render() {
    var { expense, handleDelete } = this.props;

    return (
      <tr data-id={expense.id}>
        {this.state.isEditing ? (
          <td colSpan="6">
            <Form
              expense={expense}
              onSubmit={this.handleUpdate}
              onCancel={this.handleClick}
            />
          </td>
        ) : (
          <React.Fragment>
            <td>
              <input type="checkbox" />
            </td>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDate(expense.date)}</td>
            <td className="actions">
              <button
                type="button"
                className="action"
                onClick={this.handleClick}
              >
                <Icon type="edit" />
              </button>
              <button type="button" className="action" onClick={handleDelete}>
                <Icon type="delete" />
              </button>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}

export default Expense;

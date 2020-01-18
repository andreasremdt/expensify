import React from "react";
import Icon from "./Icon";
import { formatDate, formatCurrency } from "../utils/format-helpers";
import "./Table.css";

function Table({ expenses, handleDelete }) {
  return (
    <table>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.id} data-id={expense.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDate(expense.date)}</td>
            <td className="actions">
              <button type="button" className="action">
                <Icon type="edit" />
              </button>
              <button type="button" className="action" onClick={handleDelete}>
                <Icon type="delete" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
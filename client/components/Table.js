import React from "react";
import Icon from "./Icon";
import { formatDate, formatCurrency } from "../utils/format-helpers";
import "./Table.css";

function Table({ expenses }) {
  return (
    <div className="expenses-table">
      <table>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
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
                <button type="button" className="action">
                  <Icon type="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
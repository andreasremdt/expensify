import React from "react";
import Expense from "./Expense";
import "./Table.css";

function Table({ expenses, handleDelete, handleUpdate }) {
  return (
    <table>
      <tbody>
        {expenses.map(expense => (
          <Expense
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

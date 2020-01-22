import React from "react";
import Expense from "./Expense";
import EmptyState from "./EmptyState";
import ExpenseContext from "../contexts/ExpenseContext";
import "./Table.css";

function Table() {
  var { expenses } = React.useContext(ExpenseContext);

  if (!expenses.length) {
    return <EmptyState>You currently don't have any expenses.</EmptyState>;
  }

  return (
    <table>
      <tbody>
        {expenses.map(expense => (
          <Expense key={expense._id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

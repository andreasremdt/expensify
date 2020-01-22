import React from "react";
import Expense from "./Expense";
import ExpenseContext from "../contexts/ExpenseContext";
import "./Table.css";

function Table() {
  var { expenses } = React.useContext(ExpenseContext);

  return (
    <table>
      <tbody>
        {expenses.map(expense => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

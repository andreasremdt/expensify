import React from "react";
import ExpenseContext from "../contexts/ExpenseContext";
import * as helpers from "../utils/statistic-helpers";
import { formatCurrency } from "../utils/format-helpers";
import "./Statistics.css";

function Statistics() {
  var { expenses } = React.useContext(ExpenseContext);

  var total = React.useMemo(() => {
    return formatCurrency(helpers.getTotalAmount(expenses));
  }, [expenses]);

  var highest = React.useMemo(() => {
    return formatCurrency(helpers.getHighestAmount(expenses));
  }, [expenses]);

  var number = React.useMemo(() => {
    return helpers.getNumberOfExpenses(expenses);
  }, [expenses]);

  if (!expenses.length) {
    return null;
  }

  return (
    <section className="wrapper statistics-wrapper">
      <article>
        <h2 className="title">Total expenses</h2>
        <p className="value">{total}</p>
      </article>
      <article>
        <h2 className="title">Highest expense</h2>
        <p className="value">{highest}</p>
      </article>
      <article>
        <h2 className="title">Number of expenses</h2>
        <p className="value">{number}</p>
      </article>
    </section>
  );
}

export default Statistics;

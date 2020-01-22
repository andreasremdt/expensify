function getTotalAmount(expenses) {
  return expenses.reduce((previous, expense) => {
    return previous + parseFloat(expense.amount);
  }, 0.0);
}

function getHighestAmount(expenses) {
  return Math.max(...expenses.map(expense => parseFloat(expense.amount)));
}

function getNumberOfExpenses(expenses) {
  return expenses.length;
}

export { getTotalAmount, getHighestAmount, getNumberOfExpenses };

import React from "react";
import ExpensesTable from "./components/ExpensesTable";
import ExpensesForm from "./components/ExpensesForm";

function App() {
  return (
    <React.Fragment>
      <ExpensesForm />
      <ExpensesTable />
    </React.Fragment>
  );
}

export default App;
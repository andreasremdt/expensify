import React from "react";
import Header from "./components/Header";
import ExpensesTable from "./components/ExpensesTable";
import ExpensesForm from "./components/ExpensesForm";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ExpensesForm />
      <ExpensesTable />
    </React.Fragment>
  );
}

export default App;
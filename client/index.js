import { render } from "react-dom";
import React from "react";
import App from "./App";
import { ExpenseContextWrapper } from "./contexts/ExpenseContext";
import "./index.css";

render(
  <ExpenseContextWrapper>
    <App />
  </ExpenseContextWrapper>,
  document.getElementById("root")
);

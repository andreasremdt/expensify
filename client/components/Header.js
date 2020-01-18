import React from "react";
import Button from "./Button";
import "./Header.css";

function Header() {
  return (
    <header className="page-header">
      <h1 className="">Expensify</h1>

      <Button>Create</Button>
    </header>
  );
}

export default Header;
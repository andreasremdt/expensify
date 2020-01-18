import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import "./Header.css";

function Header() {
  return (
    <header className="page-header">
      <h1 className="">Expensify</h1>

      <Button>
        <Icon type="create" /> Create
      </Button>
    </header>
  );
}

export default Header;
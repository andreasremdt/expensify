import React from "react";
import "./Input.css";

function Input(props) {
  var { component } = props;
  var Tag = component || "input";

  return (
    <Tag className="form-input" {...props} />
  );
}

export default Input;